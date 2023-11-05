"use client";
import React from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useRouter } from "next/navigation";

// Dynamically import ReactQuill to ensure it's only loaded on the client side
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

var toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block", "link", "image"],

    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],

    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
];

export default function BlogsPage() {
    const router = useRouter();
    const [content, setContent] = React.useState("");

    const handleContentChange = (value: any) => {
        setContent(value);
    };

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();

        const response = await fetch("/api/blog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content }),
        });
    };

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            document.title = "Blogs - Sumit Nanda";
        }
    }, []);

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
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            {
                                <ReactQuill
                                    value={content}
                                    onChange={handleContentChange}
                                    modules={{
                                        toolbar: toolbarOptions,
                                    }}
                                    placeholder="Write an epic"
                                />
                            }
                        </div>
                        <div>
                            <button type="submit">Publish</button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}
