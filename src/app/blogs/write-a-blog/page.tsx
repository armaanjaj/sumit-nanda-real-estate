"use client";
import React from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import axios from "axios";

// Dynamically import ReactQuill to ensure it's only loaded on the client side
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const RedMessage = styled.span`
    color: red;
    font-size: large;
    font-weight: bold;
`;


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

export default function WriteBlogPage() {
    const router = useRouter();
    const [title, setTitle] = React.useState("");
    const [image, setImage] = React.useState(null);
    const [content, setContent] = React.useState("");

    const handleContentChange = (value: any) => {
        setContent(value);
    };

    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        if (image) {
            formData.append("image", image);
        }

        try {
            const response = await axios.post("/api/blog", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            if (response.status === 200) {
                router.push("/");
            } else {
                console.error("Error posting the blog");
            }
        } catch (error) {
            console.error("Error posting the blog:", error);
        }
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
                    <form
                        onSubmit={handleFormSubmit}
                        className="flex flex-col-reverse justify-start items-start w-full gap-5"
                    >
                        <div className="w-full">
                            {
                                <ReactQuill
                                    value={content}
                                    onChange={handleContentChange}
                                    modules={{
                                        toolbar: toolbarOptions,
                                    }}
                                    className="text-center"
                                    placeholder="Write an epic"
                                />
                            }
                        </div>
                        <div className="flex flex-row justify-start items-center gap-3 w-full">
                            <div className="flex flex-row justify-center items-center gap-1">
                                <label
                                    htmlFor="blog_cover"
                                    className="font-bold text-2xl"
                                >
                                    Cover image
                                </label>
                                <RedMessage>*</RedMessage>
                            </div>
                            <input
                                type="file"
                                name="blog_cover"
                                id="blog_cover"
                                className="border rounded outline-blue-300 p-2"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                        <div className="flex flex-row justify-start items-center gap-3 w-full">
                            <div className="flex flex-row justify-center items-center gap-1">
                                <label
                                    htmlFor="blog_title"
                                    className="font-bold text-2xl"
                                >
                                    Title
                                </label>
                                <RedMessage>*</RedMessage>
                            </div>
                            <input
                                type="text"
                                name="blog_title"
                                id="blog_title"
                                placeholder="Blog title here..."
                                className="border rounded w-full h-10 text-2xl outline-blue-300 p-2"
                                value={title}
                                onChange={(e: any) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="w-full flex flex-row justify-end items-center">
                            <button
                                type="submit"
                                className="px-3 py-2 bg-red-600 text-white rounded font-bold hover:bg-red-500 transition"
                            >
                                Publish
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}
