"use client";
import React from "react";
import Logo from "../logo/Logo";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Link from "next/link";
import layout from "@/app/site.module.css"

export default function Header() {
    return (
        <header className="flex flex-col justify-center items-stretch w-full text-[#535354] text-lg h-28 border-b-2">
            <div className={`${layout.lg} py-3`}>
                <div className="max-w-full flex flex-row gap-10">
                    <div className="w-1/4 mx-auto">
                        <Logo />
                    </div>
                    <nav
                        id="site-navigation"
                        className="w-1/4 flex flex-col justify-center items-center"
                    >
                        <button id="menu-toggle"></button>
                        <div>
                            <div id="menu">
                                <ul className="list-none flex flex-row gap-6">
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
                        </div>
                    </nav>
                    <nav
                        id="secondary-navigation"
                        className="w-1/4 flex flex-row justify-center items-center"
                    >
                        <ul>
                            <li className="text-center">
                                <a
                                    href="https://calendly.com/sumitnandaexa/30min"
                                    target="_blank"
                                    className="uppercase"
                                >
                                    schedule appointment
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav
                        id="social-links"
                        className="w-fit flex flex-row justify-center items-center"
                    >
                        <ul className="list-none flex flex-row gap-3 scale-110">
                            <li>
                                <Link href={"https://www.facebook.com/profile.php?id=100067482373167&mibextid=ZbWKwL"} target="_blank">
                                    <FacebookIcon />
                                </Link>
                            </li>
                            <li>
                                <Link href={"https://www.instagram.com/sumitnandaexa/"} target="_blank">
                                    <InstagramIcon />
                                </Link>
                            </li>
                            <li>
                                <Link href={"mailto:sumit.nanda@exarealty.ca"}>
                                    <MailOutlineIcon />
                                </Link>
                            </li>
                            <li>
                                <Link href={"tel:587-971-7171"}>
                                    <CallOutlinedIcon />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
