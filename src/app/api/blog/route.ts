// Import necessary modules and models
import { NextRequest, NextResponse } from "next/server";
import { dbConnect as connect } from "@/dbConfig/dbConfig";
import Blog from "@/models/blogModel";
import NodeCache from "node-cache";
import { join } from "path";
import { writeFile } from "fs";
import { promisify } from "util";

// Convert writeFile to a promise-based function
const writeFileAsync = promisify(writeFile);

// Connect to the database
connect();

// NodeCache configuration for caching
const cache = new NodeCache({
    stdTTL: 1800,
    checkperiod: 300,
});

// disable body parser
export const config = {
    api: {
        bodyParser: false,
    },
};

// GET route for fetching blogs
export async function GET(req: NextRequest) {
    try {
        const slug = req.nextUrl.searchParams.get("slug") as string;

        if (slug) {
            const blog = await Blog.findOne({ slug });

            if (blog) {
                return NextResponse.json({ blog });
            } else {
                return NextResponse.json(
                    { error: "Blog not found" },
                    { status: 404 }
                );
            }
        } else {
            const cachedBlogs = cache.get("blogs");

            if (cachedBlogs) {
                return NextResponse.json({ blogs: cachedBlogs });
            }

            const blogs = await Blog.find({});
            cache.set("blogs", blogs);
            return NextResponse.json({ blogs });
        }
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message, success: false },
            { status: 500 }
        );
    }
}

// POST route for creating a new blog
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const data = await req.formData();
        const image: File | null = data.get("image") as unknown as File;
        const title: String | null = data.get("title") as unknown as String;
        const content: String | null = data.get("content") as unknown as String;
        const slug: String | null = data.get("slug") as unknown as String;

        if (!image || !title || !content || !slug) {
            return NextResponse.json({
                success: false,
                message: "Please pass all necessary data",
            });
        }

        const blogTitle = await Blog.findOne({ title });

        if (blogTitle) {
            return NextResponse.json({
                success: false,
                message:
                    "Already posted. More than one blog of the same title is not allowed",
            });
        }

        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const filePath = join(
            process.cwd(), // This gets the current working directory's root
            "public",
            "uploads",
            "blogs",
            "cover",
            image.name
        );

        await writeFileAsync(filePath, buffer);

        const coverImagePath = "/uploads/blogs/cover/" + image.name;

        const blog = new Blog({
            coverImagePath,
            title,
            content,
            slug,
        });

        const savedBlog = await blog.save();

        cache.del("blogs");

        return NextResponse.json({
            message: "Blog posted successfully",
            success: true,
            savedBlog,
        });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message, success: false },
            { status: 500 }
        );
    }
}
