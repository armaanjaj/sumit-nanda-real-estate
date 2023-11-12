"use client";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import axios from "axios";
import "@/custom-syles/blogStyle.css";

interface Blog {
    date: Date;
    title: string;
    content: string;
    slug: string;
}

export default function BlogContentPage() {
    const router = useRouter();
    const pathname = usePathname();
    const [blog, setBlog] = React.useState<Blog | null>(null);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const fetchOneBlog = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `/api/blog?slug=${pathname.split("/")[2]}`
                );
                setBlog(response.data.blog);
            } catch (error) {
                console.error("Error fetching the blog:", error);
            }
            setLoading(false);
        };

        fetchOneBlog();
    }, [pathname]);

    return (
        <main>
            <section className="xs:px-2 sm:px-5 md:px-10 lg:px-16 xl:px-36 py-24 h-full w-full flex flex-col justify-start items-stretch gap-10">
                <button
                    onClick={() => router.back()}
                    className="flex flex-row justify-start items-center gap-2 transition w-fit"
                >
                    <ArrowCircleLeftIcon className="hover:scale-105" />
                    <span>Back</span>
                </button>
                {loading ? (
                    "Loading..."
                ) : (
                    <div className="flex flex-col justify-start items-center w-full gap-5">
                        <h1 className="text-4xl font-extrabold">{blog?.title}</h1>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: blog?.content || "",
                            }}
                            className="blogStyle"
                        />
                    </div>
                )}
            </section>
        </main>
    );
}
