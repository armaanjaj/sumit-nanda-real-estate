import { dbConnect as connect } from "@/dbConfig/dbConfig";
import Blog from "@/models/blogModel";
import { NextRequest, NextResponse } from "next/server";
import NodeCache from "node-cache";

connect();

const cache = new NodeCache({
    stdTTL: 1800,
    checkperiod: 300,
});

export async function GET(req: NextRequest) {
    try {
        const slug = req.nextUrl.searchParams.get("slug") as string;

        if (slug) {
            // Fetch a specific blog by slug
            const blog = await Blog.findOne({ slug });

            if (blog) {
                return NextResponse.json({ blog });
            } else {
                return NextResponse.json({ error: "Blog not found" }, { status: 404 });
            }
        } else {
            // Fetch all blogs from cache or database
            const cachedBlogs = cache.get("blogs");

            if (cachedBlogs) {
                return NextResponse.json({ blogs: cachedBlogs });
            }

            const blogs = await Blog.find({});
            cache.set("blogs", blogs);
            return NextResponse.json({ blogs });
        }
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { coverImagePath, title, content, slug } = reqBody;

        // Check for existing title
        const blogTitle = await Blog.findOne({ title });

        if (blogTitle) {
            return NextResponse.json(
                {
                    error: "Already posted. More than one blog of same title not allowed",
                },
                { status: 400 }
            );
        }

        const blog = new Blog({
            coverImagePath,
            title,
            content,
            slug
        });

        const savedBlog = await blog.save();

        // Clear the cached blogs to refresh the cache
        cache.del("blogs");

        return NextResponse.json({
            message: "Blog posted successfully",
            success: true,
            savedBlog,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
