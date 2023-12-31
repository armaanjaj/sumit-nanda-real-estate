"use client";
import Link from "next/link";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import OpenInNewSharpIcon from "@mui/icons-material/OpenInNewSharp";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";
import PlaylistAddCheckRoundedIcon from "@mui/icons-material/PlaylistAddCheckRounded";
import React from "react";
import { motion } from "framer-motion";
import Listing from "@/components/listing/Listing";
import TestimonialsSlider from "@/components/testimonialSlider/TestimonialsSlider";
import ReviewForm from "@/components/review-form/Form";
import Image from "next/image";

export default function HomePage() {
    React.useEffect(() => {
        document.title = "Sumit Nanda - Real Estate";
    }, []);

    return (
        <>
            <main>
                <section id="intro-container" className="relative">
                    {/* Use the container as a relative position for absolute positioning of content */}
                    <div
                        id="intro-special"
                        className="relative h-screen bg-cover bg-center"
                        style={{ backgroundImage: `url('/Home-exa-crop.jpg')` }}
                    >
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        {/* Overlay content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
                            <div className="text-white text-center">
                                <motion.h1
                                    initial={{
                                        opacity: 0,
                                        y: 3,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 0,
                                        type: "spring",
                                    }}
                                    className="text-6xl font-bold mb-4"
                                >
                                    Sumit Nanda
                                </motion.h1>
                                <motion.p
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.1,
                                        type: "spring",
                                    }}
                                    className="text-xl"
                                >
                                    Real Estate Agent
                                </motion.p>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-5">
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 0.2,
                                        type: "spring",
                                    }}
                                >
                                    <Link
                                        href={"https://sumitnanda.com"}
                                        target="_blank"
                                        className="flex flex-row flex-nowrap justify-center link-button group relative rounded-sm w-fit px-5 py-3 bg-red-600 text-white font-bold transition-transform ease-in-out duration-300 hover:translate-x-2"
                                    >
                                        <span className="group-hover:hidden">
                                            Buyer
                                        </span>
                                        <span className="hidden group-hover:block">
                                            Explore properties
                                            <OpenInNewSharpIcon className="arrow-icon" />
                                        </span>
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.3,
                                        type: "spring",
                                    }}
                                >
                                    <Link
                                        href={"/contact"}
                                        className="flex flex-row flex-nowrap justify-center link-button group relative rounded-sm w-fit px-5 py-3 bg-red-600 text-white font-bold transition-transform ease-in-out duration-300 hover:translate-x-2"
                                    >
                                        <span className="group-hover:hidden">
                                            Seller
                                        </span>
                                        <span className="hidden group-hover:block">
                                            Contact me
                                            <ArrowRightAltRoundedIcon className="arrow-icon" />
                                        </span>
                                    </Link>
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.4,
                                    type: "spring",
                                }}
                            >
                                <Link
                                    href={"/tools/firm-listings"}
                                    className="flex flex-row flex-nowrap justify-center link-button group relative rounded-sm w-fit px-5 py-3 bg-red-600 text-white font-bold transition-transform ease-in-out duration-300 hover:-translate-y-1"
                                >
                                    <span>
                                        Firm listings
                                        <ArrowRightAltRoundedIcon className="arrow-icon" />
                                    </span>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                    <section
                        className={`xs:px-2 sm:px-5 md:px-10 lg:px-16 xl:px-36 py-24 h-full w-full flex flex-col justify-start items-stretch gap-24`}
                    >
                        <div
                            id="get-started"
                            className="flex flex-col justify-center items-center text-center gap-5"
                        >
                            <h3 className="text-4xl font-bold">
                                Ready to Begin Your Journey
                            </h3>
                            <p>
                                I&apos;m eager to demonstrate how partnering
                                with the right real estate agent can make the
                                process of buying or selling your home truly
                                transformative.
                            </p>
                            <p>
                                With expert guidance and meticulous financial
                                planning, you&apos;ll be pleasantly surprised by
                                the possibilities within your grasp.
                                Collaborating with us offers an exceptional
                                opportunity to leverage your assets and shape a
                                brighter future for yourself and your loved
                                ones.
                            </p>
                            <Link
                                href="https://calendly.com/sumitnandaexa/30min"
                                target="_blank"
                                className="uppercase text-white bg-black px-5 py-3 rounded-sm hover:bg-gray-800 transition"
                            >
                                book a free call
                            </Link>
                        </div>
                        <div className="h-screen flex flex-col justify-center items-center gap-10">
                            <h3 className="text-4xl font-bold">
                                Recent listings
                            </h3>
                            <Listing />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-10">
                            <h3 className="text-4xl font-bold">
                                Explore tools
                            </h3>
                            <div className="flex justify-center items-center gap-5 xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
                                <div className="flex flex-col justify-between items-center gap-7 border-2 rounded-md shadow-md p-5 xs:w-fit sm:w-fit md:w-fit lg:w-1/4 xl:w-1/4">
                                    <h4 className="text-xl font-bold">
                                        Home evaluator
                                    </h4>
                                    <PlaylistAddCheckRoundedIcon className="scale-[200%]" />
                                    <span className="h-56 flex flex-col justify-center items-center text-center">
                                        Unlock the full potential of your
                                        property with our expert home evaluation
                                        services. Find out what your home is
                                        really worth.
                                    </span>
                                    <Link
                                        href={"/tools/home-evaluator"}
                                        className="rounded-sm bg-red-600 px-5 py-3 text-white font-bold hover:shadow-md transition whitespace-nowrap hover:bg-red-500"
                                    >
                                        Evaluate my home
                                    </Link>
                                </div>
                                <div className="flex flex-col justify-between items-center gap-7 border-2 rounded-md shadow-md p-5  xs:w-fit sm:w-fit md:w-fit lg:w-1/4 xl:w-1/4">
                                    <h4 className="text-xl font-bold">
                                        Mortgage calculator
                                    </h4>
                                    <CalculateRoundedIcon className="scale-[200%]" />
                                    <span className="h-56 flex flex-col justify-center items-center text-center">
                                        Empower your homeownership dreams with
                                        our Mortgage Calculator. Calculate your
                                        monthly payments and plan your path to
                                        your dream home with confidence.
                                    </span>
                                    <Link
                                        href={"/tools/mortgage-calculator"}
                                        className="rounded-sm bg-red-600 px-5 py-3 text-white font-bold hover:shadow-md transition whitespace-nowrap hover:bg-red-500"
                                    >
                                        Calculate my mortgage
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-10">
                            <h3 className="text-4xl font-bold">Testimonials</h3>
                            <TestimonialsSlider />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-10 w-full">
                            <h3 className="text-4xl font-bold">
                                Write a review
                            </h3>
                            <div className="flex flex-row justify-center items-center gap-5 w-full">
                                <div className="xs:hidden sm:hidden md:hidden lg:block xl:block">
                                    <Image
                                        src="/write-a-review.jpg"
                                        alt="Review"
                                        width={600}
                                        height={800}
                                        priority
                                        className="w-fit"
                                    />
                                </div>
                                <ReviewForm />
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
}
