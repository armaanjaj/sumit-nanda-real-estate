"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

export default function AboutPage() {
    React.useEffect(() => {
        document.title = "About - Sumit Nanda";
    }, []);

    return (
        <>
            <Header />
            <main>
                <section id="about">
                    Welcome! I’m Jaime McClintock Your lifestyle focused Realtor
                    using a holistic approach to serve South Calgary &
                    surrounding communities As a top producing real estate
                    advisor I approach each client with a unique perspective
                    that blends financial wisdom and lifestyle improvement. My
                    goal is to provide personalized guidance that takes into
                    account both your financial objectives and your aspirations
                    for a fulfilling life. With a focus on delivering
                    exceptional customer service, I work with clients from all
                    walks of life and financial backgrounds to make the home
                    buying or selling journey a smooth and stress-free
                    experience. Whether you’re looking for a larger home, a
                    smaller space, a new community, or a new city, I’ll be there
                    every step of the way to help you achieve your goals.
                </section>
            </main>
            <Footer />
        </>
    );
}
