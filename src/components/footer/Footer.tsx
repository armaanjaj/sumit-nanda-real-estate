"use client";
import React from "react";
import Link from "next/link";
import Logo from "../logo/Logo";
import layout from "@/app/site.module.css"

export default function Footer() {
    return (
        <footer id="colophon" role="content-info" className="w-full h-full border-t-2">
            <div id="site-footer-area" className={`${layout.lg} py-16`}>
                <div
                    id="site-footer-area-inner"
                    className="flex flex-row justify-start items-start mb-5"
                >
                    <div
                        id="footer-container-1"
                        className="w-1/3 flex flex-col justify-start items-start h-full"
                    >
                        <Logo />
                        <span>
                            &copy; {new Date().getFullYear()} Sumit Nanda
                        </span>
                        <span>All Rights Reserved</span>
                    </div>
                    <div
                        id="footer-container-2"
                        className="w-1/3 flex flex-col justify-start items-start h-full gap-5"
                    >
                        <div id="popular-pages">
                            <div className="text-lg font-bold">
                                Navigation
                            </div>
                            <ul>
                                <li>
                                    <Link href={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link href={"/about/"}>About</Link>
                                </li>
                                <li>
                                    <Link href={"/blogs/"}>Blogs</Link>
                                </li>
                                <li>
                                    <Link href={"/contact/"}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div id="office-hours">
                            <div className="text-lg font-bold">
                                Office Hours
                            </div>
                            <div>
                                <div>
                                    <span className="uppercase">
                                        9 am - 6 pm monday - friday
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="footer-container-3"
                        className="w-1/3 flex flex-col justify-start items-start h-full gap-5"
                    >
                        <div
                            id="footer-inner-owner-title-contact"
                            className="flex flex-col justify-center items-start"
                        >
                            <span className="text-lg font-bold">
                                Sumit Nanda Real Estate
                            </span>
                            <span className="underline">
                                <Link href={"mailto:sumit.nanda@exarealty.ca"}>
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
                            <span>2750 22 St NE #206 Calgary, AB T2E 7L9</span>
                            <div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10320.680066204965!2d-114.0071111896702!3d51.07676289216694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537164dfa4455555%3A0x6d58a9b69b4dde48!2s2750%2022%20St%20NE%20%23206%2C%20Calgary%2C%20AB%20T2E%207L9!5e0!3m2!1sen!2sca!4v1697675469606!5m2!1sen!2sca"
                                    width="600"
                                    height="460"
                                    loading="lazy"
                                    about="EXA realty google map location"
                                    className="w-fit h-fit"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=""><Link href={"/terms-privacy-policy"}>Terms & Privacy policy</Link></div>
            </div>
        </footer>
    );
}
