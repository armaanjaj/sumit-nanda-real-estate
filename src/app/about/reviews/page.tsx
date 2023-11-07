"use client";
import axios from "axios";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

interface Review {
    name: string;
    comment: string;
    rating: number; // Change the rating field type to number
}

export default function ReviewPage() {
    const router = useRouter();
    const [reviews, setReviews] = React.useState<Review[]>([]);

    React.useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get("/api/review");
                setReviews(response.data.reviews);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        fetchReviews();
    }, []);

    React.useEffect(() => {
        document.title = "Testimonials - Sumit Nanda";
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
                <div className="flex flex-col justify-start items-start gap-10 w-full">
                    <h1 className="font-bold text-xl w-full flex flex-row justify-between items-center">
                        <span>Customer reviews</span>
                        <Link
                            href={"/about/reviews/write-a-review"}
                            className="font-normal text-base underline px-3 py-2 rounded border-2"
                        >
                            Write a review
                        </Link>
                    </h1>
                    <div className="flex flex-row justify-center items-center gap-5 flex-wrap">
                        {reviews.length > 0 ? (
                            reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="bg-white h-96 w-80 py-12 px-8 rounded-md shadow-md border-2 flex flex-col justify-between items-center gap-3"
                                >
                                    <p className="h-max">
                                        &ldquo;{review.comment}&rdquo;
                                    </p>
                                    <div className="flex flex-col justify-normal items-center gap-2 h-fit">
                                        <div className="flex flex-row justify-center items-center gap-2 text-orange-400">
                                            {Array.from(
                                                { length: 5 },
                                                (star, i) => (
                                                    <span key={i}>
                                                        {i < review.rating ? (
                                                            <StarRateIcon />
                                                        ) : (
                                                            <StarBorderOutlinedIcon />
                                                        )}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                        <h2 className="text-lg font-semibold">
                                            {review.name}
                                        </h2>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No reviews available.</p>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
