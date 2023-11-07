"use client";
import ToolItem from "@/components/toolItem/ToolItem";
import React from "react";

export default function Page() {

    React.useEffect(() => {
        document.title = "Tools - Sumit Nanda";
    }, []);

    return (
        <>
            <main>
                <section
                    className={`xs:px-2 sm:px-5 md:px-10 lg:px-16 xl:px-36 py-24 h-full w-full flex flex-col justify-start items-center gap-24`}
                >
                    <h1 className="text-3xl font-bold">Tools</h1>
                    <div className="flex justify-start items-center gap-8 xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
                        <ToolItem
                            toolLink={"/home-evaluator"}
                            imageSrc={"/tools-home-evaluation.jpg"}
                            alt={"Free home evaluation"}
                            text={"Free home evaluation"}
                        />
                        <ToolItem
                            toolLink={"/mortgage-calculator"}
                            imageSrc={"/tools-mortgage-calculator.jpg"}
                            alt={"Mortgage calculator"}
                            text={"Mortgage calculator"}
                        />
                        <ToolItem
                            toolLink={"/firm-listings"}
                            imageSrc={"/tools-see-listings.jpg"}
                            alt={"Firm home listings"}
                            text={"See listings"}
                        />
                    </div>
                </section>
            </main>
        </>
    );
}
