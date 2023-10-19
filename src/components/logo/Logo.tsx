"use client";
import Image from "next/image";
import React from "react";

export default function Logo({ className = null }) {
    return (
        <Image
            src="/Logo.png"
            alt="Sumit Nanda Real estate"
            width={800}
            height={1000}
            priority
            className={`w-fit h-fit ${className && className}`}
        />
    );
}
