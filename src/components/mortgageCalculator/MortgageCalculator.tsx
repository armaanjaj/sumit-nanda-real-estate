"use client";
import { useEffect } from "react";

const MortgageCalculator: React.FC = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.ratehub.ca/assets/js/widget-loader.js";
        script.async = true;
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-stretch text-center gap-5">
            <h2 className="text-lg font-bold mt-0">
                Alberta Mortgage Payment Calculator
            </h2>
            <div
                className="widget w-full"
                data-widget="calc-payment"
                data-province="AB"
                data-lang="en"
            ></div>
            <div className="text-right mt-2">
                <a
                    href="https://www.ratehub.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://www.ratehub.ca/assets/images/widget-logo.png"
                        alt="Ratehub.ca logo"
                        className="w-20"
                    />
                </a>
            </div>
        </div>
    );
};

export default MortgageCalculator;
