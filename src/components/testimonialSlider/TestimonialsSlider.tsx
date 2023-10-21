import { useState, useEffect } from "react";
import testimonials from "@/testimonials.json";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsSlider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         nextSlide();
    //     }, 5000); // Slide every 10 seconds

    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, [activeIndex]);

    return (
        <div className="relative w-full">
            <div
                className="absolute z-50 left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={prevSlide}
            >
                <ArrowCircleLeftIcon />
            </div>
            <div
                className="absolute z-50 right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={nextSlide}
            >
                <ArrowCircleRightIcon />
            </div>
            <div className="relative w-full h-64 overflow-hidden">
                <motion.div
                    className="w-full h-full flex"
                    style={{ width: `${testimonials.length * 100}%` }}
                    initial={{ x: 0 }}
                    animate={{ x: -activeIndex * 100 + "%" }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="w-full flex-shrink-0 p-4">
                            <div className="mx-auto bg-white p-4 rounded-md shadow-md">
                                <h2 className="text-lg font-semibold">
                                    {testimonial.name}
                                </h2>
                                <p className="mt-2">{testimonial.comment}</p>
                                <p className="mt-2 text-gray-500">
                                    {testimonial.rate}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TestimonialsSlider;
