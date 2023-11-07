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
}

export default function WriteBlogPage() {
    const router = useRouter();
    const [blogs, setBlogs] = React.useState<Blog[]>([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        document.title = "Blogs - Sumit Nanda";
        fetchAllBlogs();
    }, []);

    const fetchAllBlogs = async () => {
        setLoading(true)
        try {
            const response = await axios.get("/api/blog");
            setBlogs(response.data.blogs);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
        setLoading(false)
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
                    <h1 className="font-bold text-xl w-full flex flex-row justify-between items-center">
                        <span>Blogs</span>
                        <Link
                            href={"/blogs/write-a-blog"}
                            className="font-normal text-base underline px-3 py-2 rounded border-2"
                        >
                            Write a blog
                        </Link>
                    </h1>
                    {loading ? (
                        "Loading..."
                    ) : (
                        <div className="flex flex-row justify-start items-center gap-10 flex-wrap">
                            {blogs.length > 0 && (
                                blogs.map((blog, index) => (
                                    <div key={index}>
                                        <BlogItem
                                            slug={blog.slug}
                                            title={blog.title}
                                            date={blog.date}
                                        />
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}
