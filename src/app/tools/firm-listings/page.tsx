"use client";
import Listing from "@/components/listing/Listing";
import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useRouter } from "next/navigation";

export default function page() {

    const router = useRouter();

    return (
        <>
            <main>
                <section
                    className={`xs:px-2 sm:px-5 md:px-10 lg:px-16 xl:px-36 py-24 h-full w-full flex flex-col justify-start items-stretch gap-10`}
                >
                    <button onClick={() => router.back()} className="flex flex-row justify-start items-center gap-2 transition w-fit">
                        <ArrowCircleLeftIcon className="hover:scale-105" />
                        <span>Back</span>
                    </button>
                    <div className="h-screen flex flex-col justify-center items-center gap-10">
                        <h3 className="text-4xl font-bold">
                            Recent firm listings
                        </h3>
                        <Listing />
                    </div>
                </section>
            </main>
        </>
    );
}
