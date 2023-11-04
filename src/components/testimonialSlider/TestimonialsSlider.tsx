import React, { useState, useEffect } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import Link from "next/link";

interface Review {
    name: string;
    comment: string;
    rating: number;
}

const TestimonialsSlider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [reviews, setReviews] = useState<Review[]>([]);

    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);

        return () => clearInterval(interval);
    }, [activeIndex, nextSlide]);

    useEffect(() => {
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

    return (
        <div className="flex flex-col justify-evenly items-center w-full gap-5">
            <div className="w-full h-max flex flex-row justify-center items-center gap-5">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                >
                    <div className="bg-white h-96 w-80 py-12 px-8 rounded-md shadow-md border-2 flex flex-col justify-center items-center gap-3">
                        <h2 className="text-lg font-semibold">
                            {reviews[activeIndex]
                                ? reviews[activeIndex].name
                                : ""}
                        </h2>
                        <p>
                            &ldquo;
                            {reviews[activeIndex]
                                ? reviews[activeIndex].comment
                                : ""}
                            &rdquo;
                        </p>
                        <div className="flex flex-row justify-center items-center gap-2 text-orange-400">
                            {Array.from({ length: 5 }, (star, i) => (
                                <span key={i}>
                                    {i <
                                    (reviews[activeIndex]
                                        ? reviews[activeIndex].rating
                                        : 0) ? (
                                        <StarRateIcon />
                                    ) : (
                                        <StarBorderOutlinedIcon />
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="w-full flex flex-row justify-center items-center">
                <Link
                    href={"/about/reviews"}
                    className="text-blue-500 font-light text-sm"
                >
                    See all
                </Link>
            </div>
        </div>
    );
};

export default TestimonialsSlider;
