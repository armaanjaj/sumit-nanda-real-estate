"use client";
import React from "react";
import Logo from "../logo/Logo";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Link from "next/link";
import layout from "@/app/site.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const [path, setPath] = React.useState("");

    React.useEffect(() => {
        setPath(pathname);
    }, [pathname]);

    return (
        <header className="flex flex-col justify-center items-stretch w-full text-lg border-b-2 bg-white text-[#535354]">
            <div
                id="site-advertising-section"
                className={`flex flex-row justify-end items-center bg-black text-white ${layout.lg} py-1`}
            >
                <nav
                    id="social-links"
                    className="w-fit flex flex-row justify-center items-center"
                >
                    <ul className="list-none flex flex-row gap-3">
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
            <div className={`${layout.lg} py-2`}>
                <div className="max-w-full flex flex-row justify-between gap-10">
                    <div className="max-w-full flex flex-row gap-10">
                        <div className="w-1/2 mx-auto">
                            <Logo />
                        </div>
                        <nav
                            id="site-navigation"
                            className="w-1/2 flex flex-col justify-center items-center"
                        >
                            <button id="menu-toggle"></button>
                            <div>
                                <div id="menu">
                                    <ul className="list-none flex flex-row gap-6">
                                        <li>
                                            <Link
                                                href={"/"}
                                                className={`${
                                                    path === "/" && "text-black"
                                                } hover:text-black transition flex flex-col`}
                                            >
                                                Home
                                                {path === "/" && (
                                                    <span className="bg-black p-[0.025rem]"></span>
                                                )}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={"/about/"}
                                                className={`${
                                                    path === "/about" &&
                                                    "text-black"
                                                } hover:text-black transition flex flex-col`}
                                            >
                                                About
                                                {path === "/about" && (
                                                    <span className="bg-black p-[0.025rem]"></span>
                                                )}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={"/blogs/"}
                                                className={`${
                                                    path === "/blogs" &&
                                                    "text-black"
                                                } hover:text-black transition flex flex-col`}
                                            >
                                                Blogs
                                                {path === "/blogs" && (
                                                    <span className="bg-black p-[0.025rem]"></span>
                                                )}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={"/contact/"}
                                                className={`${
                                                    path === "/contact" &&
                                                    "text-black"
                                                } hover:text-black transition flex flex-col`}
                                            >
                                                Contact
                                                {path === "/contact" && (
                                                    <span className="bg-black p-[0.025rem]"></span>
                                                )}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <nav
                        id="secondary-navigation"
                        className="w-1/4 flex flex-row justify-center items-center"
                    >
                        <ul>
                            <li className="text-center">
                                <Link
                                    href="https://calendly.com/sumitnandaexa/30min"
                                    target="_blank"
                                    className="uppercase hover:text-black transition"
                                >
                                    schedule appointment
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
