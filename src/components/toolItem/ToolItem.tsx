"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ToolItem({toolLink, imageSrc, alt, text}:any) {
    return (
        <>
            <Link
                href={`/tools${toolLink}`}
                className="border-2 rounded-md shadow-md flex flex-col justify-center items-center hover:-translate-y-1 transition h-64"
            >
                <Image
                    src={`${imageSrc}`}
                    height={200}
                    width={300}
                    alt={`${alt}`}
                    className="h-full"
                />
                <div className="px-5 py-3">{text}</div>
            </Link>
        </>
    );
}
