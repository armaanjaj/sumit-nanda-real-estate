"use client";
import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BlogItem from "@/components/blogItem/BlogItem";
import axios from "axios";

interface Blog {
    date: Date;
    title: string;
    slug: string;
    coverImagePath: string;
}

export default function WriteBlogPage() {
    const router = useRouter();
    const [blogs, setBlogs] = React.useState<Blog[]>([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        document.title = "Blogs - Sumit Nanda";
        fetchAllBlogs();
        setLoading(false);
    }, []);

    const fetchAllBlogs = async () => {
        try {
            const response = await axios.get("/api/blog");
            setBlogs(response.data.blogs);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    return (
        <>
            <main>
                <section className="xs:px-2 sm:px-5 md:px-10 lg:px-16 xl:px-36 py-24 h-full w-full flex flex-col justify-start items-stretch gap-10">
                    <button
                        onClick={() => router.back()}
                        className="flex flex-row justify-start items-center gap-2 transition w-fit"
                    >
                        <ArrowCircleLeftIcon className="hover:scale-105" />
                        <span>Back</span>
                    </button>
                    <h1 className="font-bold text-xl w-full flex flex-row justify-center items-center">
                        <span>Blogs</span>
                    </h1>
                    {loading ? (
                        <div className="w-full text-center">Loading...</div>
                    ) : blogs.length > 0 ? (
                        <div className="flex flex-row justify-start items-center gap-10 flex-wrap">
                            {blogs.length > 0 &&
                                blogs.map((blog, index) => (
                                    <div key={index}>
                                        <BlogItem
                                            coverImagePath={blog.coverImagePath}
                                            slug={blog.slug}
                                            title={blog.title}
                                            date={blog.date}
                                        />
                                    </div>
                                ))}
                        </div>
                    ) : (
                        <div className="w-full text-center">No blogs found</div>
                    )}
                </section>
            </main>
        </>
    );
}
