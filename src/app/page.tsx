"use client";
import Image from "next/image";
import Link from "next/link";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import React from "react";
import layout from "@/app/site.module.css";

export default function Home() {
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
                                <h1 className="text-6xl font-bold mb-4">
                                    Welcome to Sumit Nanda's space
                                </h1>
                                <p className="text-xl">
                                    Your gateway to the world of real estate
                                </p>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-5">
                                <Link
                                    href={"https://sumitnanda.com"}
                                    target="_blank"
                                    className="flex flex-row flex-nowrap justify-center link-button group relative rounded w-fit px-5 py-3 bg-red-600 text-white font-bold transition-transform ease-in-out duration-300 hover:translate-x-2"
                                >
                                    <span className="group-hover:hidden">
                                        Buyer
                                    </span>
                                    <span className="hidden group-hover:block">
                                        Explore properties
                                        <ArrowRightAltRoundedIcon className="arrow-icon" />
                                    </span>
                                </Link>

                                <Link
                                    href={"/contact"}
                                    className="flex flex-row flex-nowrap justify-center link-button group relative rounded w-fit px-5 py-3 bg-red-600 text-white font-bold transition-transform ease-in-out duration-300 hover:translate-x-2"
                                >
                                    <span className="group-hover:hidden">
                                        Seller
                                    </span>
                                    <span className="hidden group-hover:block">
                                        Contact me
                                        <ArrowRightAltRoundedIcon className="arrow-icon" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <section className={`${layout.lg} py-24 h-full w-full`}>
                        <div
                            id="get-started"
                            className="flex flex-col justify-center items-center gap-4"
                        >
                            <h3 className="text-4xl font-bold">
                                Ready to get started
                            </h3>
                            <p>
                                I&apos;d love to show you how working with the
                                right realtor can transform the process of
                                buying or selling your home.
                            </p>
                            <p>
                                With the right advice and thorough financial
                                planning, you&apos;d be amazed by what&apos;s
                                within your reach. Working with us represents an
                                incredible opportunity to put your wealth to
                                work and design a future that provides more for
                                you and your family.
                            </p>
                            <Link
                                href="https://calendly.com/sumitnandaexa/30min"
                                target="_blank"
                                className="uppercase text-white bg-black px-5 py-3 rounded-sm hover:bg-gray-800 transition"
                            >
                                book a free call
                            </Link>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
}
