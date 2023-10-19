"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import layout from "@/app/site.module.css";
import Image from "next/image";

export default function AboutPage() {
    React.useEffect(() => {
        document.title = "About - Sumit Nanda";
    }, []);

    return (
        <>
            <main>
                <section
                    id="about"
                    className={`${layout.lg} py-24 h-full w-full flex flex-col justify-start items-center gap-3`}
                >
                    <div className="flex flex-row justify-center items-center gap-5">
                        <Image
                            src="/Sumit-Nanda.png"
                            alt="Sumit Nanda"
                            width={800}
                            height={1000}
                            priority
                            className="w-fit h-fit"
                        />

                        <div className="flex flex-col justify-start items-start gap-3">
                            <div
                                id="about-head"
                                className="text-2xl font-extrabold"
                            >
                                <h1>Welcome! I&apos;m Sumit Nanda</h1>
                            </div>
                            <div id="about-head-line" className="italic">
                                Your lifestyle focused Realtor using a holistic
                                approach to serve Calgary & surrounding
                                communities
                            </div>
                            <div>
                                As a top producing real estate advisor I
                                approach each client with a unique perspective
                                that blends financial wisdom and lifestyle
                                improvement. My goal is to provide personalized
                                guidance that takes into account both your
                                financial objectives and your aspirations for a
                                fulfilling life. With a focus on delivering
                                exceptional customer service, I work with
                                clients from all walks of life and financial
                                backgrounds to make the home buying or selling
                                journey a smooth and stress-free experience.
                                Whether you&apos;re looking for a larger home, a
                                smaller space, a new community, or a new city,
                                I&apos;ll be there every step of the way to help
                                you achieve your goals.
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
