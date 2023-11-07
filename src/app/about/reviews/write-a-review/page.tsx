"use client";
import ReviewForm from "@/components/review-form/Form";
import { useRouter } from "next/navigation";
import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export default function WriteReviewPage() {
    const router = useRouter();

    React.useEffect(() => {
        document.title = "Write a review - Sumit Nanda";
    }, []);

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

                <div className="mx-auto flex flex-col justify-start items-start gap-10">
                    <h1 className="font-bold text-xl w-full flex flex-row justify-center items-center">
                        Write a review
                    </h1>
                    <ReviewForm />
                </div>
            </section>
        </main>
    );
}
