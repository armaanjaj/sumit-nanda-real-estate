"use client";
import React from "react";
import layout from "@/app/site.module.css";
import Link from "next/link";
import Form from "@/components/contact-form/Form";

export default function ContactPage() {
    React.useEffect(() => {
        document.title = "Contact - Sumit Nanda";
    }, []);

    return (
        <>
            <main>
                <div
                    className={`xs:px-2 sm:px-5 md:px-10 lg:px-16 xl:px-36 py-24 h-full w-full`}
                >
                    <section
                        id="contact-container-1"
                        className="flex justify-between items-start gap-10 xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row"
                    >
                        <div id="contact-container-right" className="flex flex-col justify-normal items-baseline gap-8">
                            <div className="flex flex-col justify-center items-start gap-4 w-full border-b-2 pb-8">
                                <h1 className="text-lg">
                                    Book a free 30 minutes appointment with me
                                </h1>
                                <p>
                                    <Link
                                        href="https://calendly.com/sumitnandaexa/30min"
                                        target="_blank"
                                        className="uppercase text-white bg-black px-3 py-1 rounded-sm hover:bg-gray-800 transition"
                                    >
                                        schedule appointment
                                    </Link>
                                </p>
                            </div>
                            <Form />
                        </div>
                        <div
                            id="container-container-left"
                            className="xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-col justify-start items-start h-full gap-5 sticky top-5 xs:pt-5 sm:pt-5 md:pt-5 lg:pt-0 xl:pt-0 xs:border-t-2 sm:border-t-2 md:border-t-2 lg:border-none xl:border-none"
                        >
                            <div
                                id="footer-inner-owner-title-contact"
                                className="flex flex-col justify-center items-start"
                            >
                                <span className="text-lg font-bold">
                                    Sumit Nanda Real Estate
                                </span>
                                <span className="underline">
                                    <Link
                                        href={"mailto:sumit.nanda@exarealty.ca"}
                                    >
                                        sumit.nanda@exarealty.ca
                                    </Link>
                                </span>
                                <span className="underline">
                                    <Link href={"tel:+15879717171"}>
                                        (587)-971-7171
                                    </Link>
                                </span>
                            </div>
                            <div
                                id="footer-inner-owner-office-hours"
                                className="flex flex-col justify-center items-start"
                            >
                                <span className="font-bold">Office hours</span>
                                <span className="uppercase">
                                    9 am - 6 pm monday - friday
                                </span>
                            </div>
                            <div
                                id="footer-inner-owner-address"
                                className="flex flex-col justify-center items-start"
                            >
                                <span>
                                    2750 22 St NE #206 Calgary, AB T2E 7L9
                                </span>
                                <div>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10320.680066204965!2d-114.0071111896702!3d51.07676289216694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537164dfa4455555%3A0x6d58a9b69b4dde48!2s2750%2022%20St%20NE%20%23206%2C%20Calgary%2C%20AB%20T2E%207L9!5e0!3m2!1sen!2sca!4v1697675469606!5m2!1sen!2sca"
                                        width="600"
                                        height="460"
                                        loading="lazy"
                                        about="EXA realty google map location"
                                        className="w-fit min-h-full border-2"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
