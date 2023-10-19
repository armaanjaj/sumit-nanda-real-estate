"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <section id="intro-container">
                    <div id="intro-special">
                        <div id="intro-media">
                            <Image
                                src="/Home-exa.jpg"
                                alt="EXA Realty"
                                width={1200}
                                height={1500}
                                priority
                                className="w-full h-fit"
                            />
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
