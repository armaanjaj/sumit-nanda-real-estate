"use client";
import Link from "next/link";
import React from "react";

export default function TermsNConditionsPage() {
    React.useEffect(() => {
        document.title = "Terms & conditions - Sumit Nanda";
    }, []);

    return (
        <>
            <main>
                <section
                    className={`xs:px-2 sm:px-5 md:px-10 lg:px-16 xl:px-36 py-24 h-full w-full`}
                >
                    <div className="flex flex-col justify-start items-start gap-5">
                        <h1 className="font-bold text-xl w-full flex flex-row justify-between items-center">
                            <span>Terms & Conditions</span>
                            <Link
                                href={"/privacy-policy"}
                                className="font-normal text-base underline px-3 py-2 rounded border-2"
                            >
                                Privacy policy
                            </Link>
                        </h1>
                        <p>
                            Sumit Nanda Real Estate Website Terms and Conditions
                            Effective Date: [October 19, 2023]
                        </p>
                        <article className="flex flex-col justify-start items-start gap-5">
                            These Terms and Conditions (&ldquo;Terms&rdquo;)
                            govern your use of the Sumit Nanda Real Estate
                            website (&ldquo;Website&rdquo;), which is owned and
                            operated by Sumit Nanda Real Estate
                            (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                            &ldquo;our&rdquo;). By using this Website, you agree
                            to comply with and be bound by these Terms. If you
                            do not agree with these Terms, please do not use
                            this Website.
                            <div className="flex flex-col justify-start items-start gap-0">
                                <h2 className="font-bold">
                                    1. Use of the Website
                                </h2>
                                <ol>
                                    <li>
                                        a. Acceptable Use: You must use this
                                        Website in a manner consistent with all
                                        applicable laws and regulations and in
                                        accordance with these Terms.
                                    </li>
                                    <li>
                                        b. User Accounts: Some portions of the
                                        Website may require you to create a user
                                        account. You are responsible for
                                        maintaining the confidentiality of your
                                        account information and are liable for
                                        any activity that occurs under your
                                        account.
                                    </li>
                                </ol>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-0">
                                <h2 className="font-bold">2. Privacy</h2>
                                <p>
                                    <span>
                                        Your use of this Website is also
                                        governed by our Privacy Policy, which
                                        can be found at&nbsp;
                                    </span>
                                    <Link
                                        href={"/privacy-policy"}
                                        className="underline text-blue-500"
                                    >
                                        Privacy policy
                                    </Link>
                                    .
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-0">
                                <h2 className="font-bold">
                                    3. Intellectual Property
                                </h2>
                                <ol>
                                    <li>
                                        a. Copyright: All content and materials
                                        on this Website, including but not
                                        limited to text, graphics, logos,
                                        images, and software, are the property
                                        of Sumit Nanda Real Estate and are
                                        protected by copyright laws.
                                    </li>
                                    <li>
                                        b. Trademarks: Sumit Nanda Real Estate
                                        and related logos and slogans are
                                        trademarks of Sumit Nanda Real Estate.
                                        You may not use these marks without our
                                        prior written permission.
                                    </li>
                                </ol>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-0">
                                <h2 className="font-bold">4. Disclaimer</h2>
                                <ol>
                                    <li>
                                        a. No Warranties: This Website is
                                        provided &ldquo;as is&rdquo; and
                                        &ldquo;as available.&rdquo; We make no
                                        warranties, express or implied,
                                        regarding the accuracy, completeness, or
                                        availability of the Website or its
                                        content.
                                    </li>
                                    <li>
                                        b. Limitation of Liability: In no event
                                        shall Sumit Nanda Real Estate be liable
                                        for any damages, including but not
                                        limited to direct, indirect, incidental,
                                        special, or consequential damages,
                                        arising out of or in connection with
                                        your use of the Website.
                                    </li>
                                </ol>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-0">
                                <h2 className="font-bold">
                                    5. Links to Third-Party Websites
                                </h2>
                                <p>
                                    This Website may contain links to
                                    third-party websites. We are not responsible
                                    for the content or practices of these
                                    third-party websites. Your use of such
                                    websites is at your own risk.
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-0">
                                <h2 className="font-bold">
                                    6. Changes to Terms and Website
                                </h2>
                                <p>
                                    We reserve the right to modify or terminate
                                    the Website or these Terms at any time. We
                                    will notify users of material changes to
                                    these Terms.
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-0">
                                <h2 className="font-bold">
                                    7. Contact Information
                                </h2>
                                <p>
                                    If you have any questions about these Terms,
                                    please contact us at:
                                </p>
                                    <div className="flex flex-col justify-start items-start">
                                        <span>Sumit Nanda Real Estate</span>
                                        <span>
                                            Email: sumit.nanda@exarealty.ca
                                        </span>
                                        <span>Phone: (587)-971-7171</span>
                                    </div>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-0">
                                <h2 className="font-bold">8. Governing Law</h2>
                                <p>
                                    These Terms are governed by and construed in
                                    accordance with the laws of the province of
                                    Alberta, Canada. By using this Website, you
                                    acknowledge that you have read and
                                    understood these Terms and agree to be bound
                                    by them.
                                </p>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
        </>
    );
}
