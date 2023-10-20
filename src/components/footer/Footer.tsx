"use client";
import React from "react";
import Link from "next/link";
import Logo from "../logo/Logo";
import layout from "@/app/site.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

export default function Footer() {
    return (
        <footer
            id="colophon"
            role="content-info"
            className="w-full h-full border-t-2 bg-white text-[#535354]"
        >
            <div id="site-footer-area" className={`xs:px-2 sm:px-5 md:px-10 lg:px-16 xl:px-36 py-16`}>
                <div
                    id="site-footer-area-inner"
                    className="flex justify-start items-start mb-5 xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row gap-5"
                >
                    <div
                        id="footer-container-1"
                        className="xs:w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 flex flex-col justify-start items-start h-full gap-5"
                    >
                        <div className="flex flex-col justify-start items-start">
                            <Logo />
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
                        </div>
                    </div>
                    <div
                        id="footer-container-2"
                        className="xs:w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 flex flex-col justify-start items-start h-full gap-5"
                    >
                        <div id="popular-pages">
                            <div className="text-lg font-bold">Navigation</div>
                            <ul>
                                <li>
                                    <Link className="underline" href={"/"}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="underline"
                                        href={"/about/"}
                                    >
                                        About
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link
                                        className="underline"
                                        href={"/blogs/"}
                                    >
                                        Blogs
                                    </Link>
                                </li> */}
                                <li>
                                    <Link
                                        className="underline"
                                        href={"/contact/"}
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="underline"
                                        href={"/tools/"}
                                    >
                                        Tools
                                    </Link>
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
                        className="xs:w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 flex flex-col justify-start items-start h-full gap-5"
                    >
                        <nav
                            id="social-links"
                            className="w-fit flex flex-col justify-center items-center"
                        >
                            <div className="text-lg font-bold">
                                Socials
                            </div>
                            <div className="w-fit flex flex-row justify-center items-center">

                            <ul className="list-none flex flex-row gap-3 scale-110">
                                <li>
                                    <Link
                                        href={
                                            "https://www.facebook.com/profile.php?id=100067482373167&mibextid=ZbWKwL"
                                        }
                                        target="_blank"
                                    >
                                        <FacebookIcon />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={
                                            "https://www.instagram.com/sumitnandaexa/"
                                        }
                                        target="_blank"
                                    >
                                        <InstagramIcon />
                                    </Link>
                                </li>
                            </ul>
                            </div>
                        </nav>
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
                                    className="w-fit h-fit border-2"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col justify-start items-start">
                        <span>
                            Copyright &copy; {new Date().getFullYear()} Sumit Nanda Real Estate
                        </span>
                        <span>All Rights Reserved</span>
                    </div>
                    <Link href={"/terms-and-conditions"}>
                        Terms & Conditions
                    </Link>
                </div>
            </div>
        </footer>
    );
}
