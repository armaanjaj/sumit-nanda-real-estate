"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import layout from "@/app/site.module.css";
import Link from "next/link";
import Form from "@/components/contact-form/Form";

export default function ContactPage() {
    React.useEffect(() => {
        document.title = "Contact - Sumit Nanda";
    }, []);

    const formQuestions = {
        question1:{
            title:"Name",
            type:{
                fieldType:"text",
                category:"full",
            },
            required:true
        },
        question2:{
            title:"Email",
            type:{
                fieldType:"email",
            },
            required:true
        },
        question3:{
            title:"Phone",
            type:{
                fieldType:"tel",
            },
            required:false
        },
        question4:{
            title:"What brings you here?",
            type:{
                fieldType:"checkbox",
                options:{
                    option1:"Looking to sell",
                    option2:"Looking to buy",
                    option3:"Interested in investment properties",
                    option4:"Other"
                }
            },
            required:true
        },
        question5:{
            title:"Address",
            type:{
                fieldType:"email",
            },
            required:true
        },
    }

    return (
        <>
            <Header />
            <main>
                <div className={`${layout.xl} py-24 h-full`}>
                    <section
                        id="contact-container-1"
                        className="flex flex-row justify-center items-start"
                    >
                        <section id="contact-container-right">
                            <Form />
                        </section>
                        <div
                            id="container-container-left"
                            className="w-1/2 flex flex-col justify-start items-start h-full gap-5"
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
                                        className="w-fit min-h-full"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
