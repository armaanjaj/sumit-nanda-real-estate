"use client";
import React from "react";
import Logo from "../logo/Logo";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import layout from "@/app/site.module.css";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const pathname = usePathname();
    const [path, setPath] = React.useState("");

    const [mobileMenu, setMobileMenu] = React.useState(false);

    React.useEffect(() => {
        setPath(pathname);
        setMobileMenu(false);
    }, [pathname]);

    return (
        <>
            <header className="flex flex-col justify-center items-stretch w-full text-lg border-b-2 bg-white text-[#535354]">
                <div
                    id="site-advertising-section"
                    className={`flex flex-row justify-end items-center bg-black text-white xs:px-2 sm:px-2 md:px-10 lg:px-16 xl:px-36 py-1`}
                >
                    <nav
                        id="social-links"
                        className="w-fit flex flex-row justify-center items-center"
                    >
                        <ul className="list-none flex flex-row gap-3 xs:scale-75 sm:scale-75 md:scale-90 lg:scale-100 xl:scale-100">
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
                <div
                    className={`xs:px-2 sm:px-5 md:px-10 lg:px-16 xl:px-36 py-2`}
                >
                    <div className="max-w-full flex flex-row justify-between items-center gap-10">
                        <div className="max-w-full flex flex-row items-center gap-10">
                            <div className="w-1/2 xs:mx-0 sm:mx-0 md:mx-0 lg:mx-auto xl:mx-auto xs:scale-125 sm:scale-125 md:scale-125 lg:scale-100 xl:scale-100">
                                {path !== "/" ? (
                                    <Link href={"/"}>
                                        <Logo />
                                    </Link>
                                ) : (
                                    <Logo />
                                )}
                            </div>
                            <nav
                                id="site-navigation"
                                className="w-1/2 flex flex-col justify-center items-center xs:hidden sm:hidden md:hidden lg:block xl:block"
                            >
                                <div>
                                    <div id="big-menu">
                                        <ul className="list-none flex flex-row gap-6">
                                            <li>
                                                <Link
                                                    href={"/"}
                                                    className={`${
                                                        path === "/" &&
                                                        "text-black"
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
                                            {/* <li>
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
                                            </li> */}
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
                            className="w-1/4 flex flex-row justify-center items-center xs:hidden sm:hidden md:hidden lg:block xl:block"
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
                        <div className="w-1/2 flex flex-col justify-center items-center xs:block sm:block md:block lg:hidden xl:hidden">
                            <button
                                id="menu-toggle"
                                onClick={() => {
                                    setMobileMenu(!mobileMenu);
                                }}
                                className="w-full h-full flex flex-row justify-end items-center"
                            >
                                {mobileMenu ? (
                                    <CloseIcon className="scale-110" />
                                ) : (
                                    <DehazeIcon className="scale-110" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <AnimatePresence>
                {mobileMenu && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, y: -20 }} // Initial state (hidden and slightly above)
                        animate={{ opacity: 1, y: 0 }} // Animation state (visible and at normal position)
                        exit={{ opacity: 0, y: -20 }} // Exit state (hidden and slightly above)
                        transition={{ duration: 0.3 }} // Animation duration
                    >
                        <ul className="list-none flex flex-col justify-start items-start px-10 py-5 border-b-2 gap-6">
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
                                        path === "/about" && "text-black"
                                    } hover:text-black transition flex flex-col`}
                                >
                                    About
                                    {path === "/about" && (
                                        <span className="bg-black p-[0.025rem]"></span>
                                    )}
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    href={"/blogs/"}
                                    className={`${
                                        path === "/blogs" && "text-black"
                                    } hover:text-black transition flex flex-col`}
                                >
                                    Blogs
                                    {path === "/blogs" && (
                                        <span className="bg-black p-[0.025rem]"></span>
                                    )}
                                </Link>
                            </li> */}
                            <li>
                                <Link
                                    href={"/contact/"}
                                    className={`${
                                        path === "/contact" && "text-black"
                                    } hover:text-black transition flex flex-col`}
                                >
                                    Contact
                                    {path === "/contact" && (
                                        <span className="bg-black p-[0.025rem]"></span>
                                    )}
                                </Link>
                            </li>
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
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
