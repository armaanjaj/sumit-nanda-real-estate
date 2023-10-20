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
                    className={`xs:px-2 sm:px-5 md:px-10 lg:px-16 xl:px-36 py-24 h-full w-full flex flex-col justify-start items-center gap-3`}
                >
                    <div className="flex justify-center items-center gap-5 xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
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
                                className="text-3xl font-extrabold"
                            >
                                <h1>
                                    Welcome! I&apos;m Sumit Nanda, Your
                                    Dedicated Realtor
                                </h1>
                            </div>
                            <div id="about-head-line" className="italic">
                                I'm Sumit Nanda, and I'm here to redefine your
                                real estate experience. As a lifestyle-focused
                                Realtor, I approach the world of real estate
                                with a holistic perspective, catering to Calgary
                                and its surrounding communities.
                            </div>
                            <div>
                                <h2 className="text-lg font-extrabold">
                                    Experience the Difference:
                                </h2>
                                <p>
                                    As a top-producing real estate advisor, my
                                    approach is not just about transactions;
                                    it's about transformations. I believe in
                                    blending financial wisdom with lifestyle
                                    enhancement, offering you a real estate
                                    journey like no other.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg font-extrabold">
                                    Your Journey, Your Aspirations:
                                </h2>
                                <p>
                                    My goal is simple - to provide you with
                                    personalized guidance that aligns with your
                                    financial objectives and your deepest
                                    aspirations for a fulfilling life. Whether
                                    you're looking to buy your dream home or
                                    embark on a successful selling journey, I'm
                                    here to make it a seamless and stress-free
                                    experience.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg font-extrabold">
                                    For Every Lifestyle and Budget:
                                </h2>
                                <p>
                                    I'm proud to work with clients from all
                                    walks of life and various financial
                                    backgrounds. It doesn't matter if you're
                                    searching for a larger home, a cozier space,
                                    a new community, or even a new city; I'm
                                    here to stand by your side every step of the
                                    way. Let's embark on this journey together
                                    and turn your real estate dreams into a
                                    reality.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
