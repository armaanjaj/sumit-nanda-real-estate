"use client";
import Link from "next/link";
import React from "react";

export default function PrivacyPolicyPage() {
    React.useEffect(() => {
        document.title = "Privacy policy - Sumit Nanda";
    }, []);

    return (
        <>
            <main>
                <section
                    className={`xs:px-2 sm:px-5 md:px-10 lg:px-16 xl:px-36 py-24 h-full w-full`}
                >
                    <div className="flex flex-col justify-start items-start gap-5">
                        <h1 className="font-bold text-xl w-full flex flex-row justify-between items-center">
                            Privacy policy
                            <Link
                                href={"/terms-and-conditions"}
                                className="font-normal text-base underline px-3 py-2 rounded border-2"
                            >
                                Terms and Conditions
                            </Link>
                        </h1>
                        <p>
                            Sumit Nanda Real Estate Website Privacy Policy
                            Effective Date: [October 19, 2023]
                        </p>
                        <article className="flex flex-col justify-start items-start gap-5">
                            This Privacy Policy describes how Sumit Nanda Real
                            Estate (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                            &ldquo;our&rdquo;) collects, uses, and protects your
                            personal information when you use our website. By
                            using this website, you consent to the practices
                            described in this Privacy Policy. If you do not
                            agree with this policy, please do not use our
                            website.
                            <div className="flex flex-col justify-start items-start gap-0">
                                <h2 className="font-bold">
                                    1. Information We Collect
                                </h2>
                                <ol>
                                    <li>
                                        a. Personal Information: We may collect
                                        personal information, such as your name,
                                        email address, phone number, and
                                        address, when you provide it to us
                                        voluntarily, for example, when you fill
                                        out a contact form or create a user
                                        account.
                                    </li>
                                    <li>
                                        b. Usage Information: We may collect
                                        information about how you use our
                                        website, such as your IP address,
                                        browser type, and the pages you visit.
                                    </li>
                                </ol>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-0">
                                <h2 className="font-bold">
                                    2. Use of Your Information
                                </h2>
                                <span>
                                    We may use your personal information for the
                                    following purposes:
                                </span>
                                <ol>
                                    <li>
                                        a. To provide information and services
                                        you request.
                                    </li>
                                    <li>
                                        b. To improve our website and user
                                        experience.
                                    </li>
                                    <li>
                                        c. To communicate with you, including
                                        responding to your inquiries.
                                    </li>
                                    <li>
                                        3. Sharing Your Information We may share
                                        your personal information with third
                                        parties only under the following
                                        circumstances:
                                        <ol className="ml-10">
                                            <li>a. With your consent.</li>
                                            <li>
                                                b. To comply with legal
                                                obligations.
                                            </li>
                                            <li>
                                                c. To protect our rights and
                                                interests.
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-0">
                                <h2 className="font-bold">
                                    4. Cookies and Tracking Technologies
                                </h2>
                                <p>
                                    Our website may use cookies and similar
                                    tracking technologies to enhance your user
                                    experience. You can set your browser to
                                    refuse cookies, but some website features
                                    may not function properly.
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-0">
                                <h2 className="font-bold">5. Security</h2>
                                <p>
                                    We take reasonable measures to protect your
                                    personal information from unauthorized
                                    access or disclosure. However, no method of
                                    internet transmission or electronic storage
                                    is 100% secure.
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-0">
                                <h2 className="font-bold">
                                    6. Third-Party Links
                                </h2>
                                <p>
                                    Our website may contain links to third-party
                                    websites. We are not responsible for the
                                    privacy practices or content of these
                                    websites.
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-0">
                                <h2 className="font-bold">
                                    7. Children&apos;s Privacy
                                </h2>
                                <p>
                                    Our website is not intended for use by
                                    individuals under the age of 18. We do not
                                    knowingly collect personal information from
                                    children.
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-0">
                                <h2 className="font-bold">
                                    8. Changes to Privacy Policy
                                </h2>
                                <p>
                                    We reserve the right to modify or update
                                    this Privacy Policy. We will notify users of
                                    material changes to our policy.
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-0">
                                <h2 className="font-bold">
                                    9. Contact Information
                                </h2>
                                <p>
                                    If you have any questions or concerns about
                                    this Privacy Policy, please contact us at:
                                </p>
                                <div className="flex flex-col justify-start items-start">
                                    <span>Sumit Nanda Real Estate</span>
                                    <span>Email: sumit.nanda@exarealty.ca</span>
                                    <span>Phone: (587)-971-7171</span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-0">
                                <h2 className="font-bold">9. Governing Law</h2>
                                <p>
                                    This Privacy Policy is governed by and
                                    construed in accordance with the laws of the
                                    province of Alberta, Canada. By using this
                                    website, you acknowledge that you have read
                                    and understood this Privacy Policy and agree
                                    to its terms.
                                </p>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
        </>
    );
}
