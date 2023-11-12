import Header from "@/components/header/Header";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL('http://localhost:3000'),
    title: "Sumit Nanda Real Estate",
    abstract:
        "Sumit Nanda Real Estate is your dedicated Realtor serving Calgary and its surrounding communities. We provide personalized guidance for buying your dream home or successfully selling your property. Our approach blends financial wisdom with lifestyle enhancement to transform your real estate experience. Contact us today for a free 30-minute appointment and unlock the full potential of your property. Turn your real estate dreams into a reality with Sumit Nanda Real Estate.",
    description:
        "Welcome to Sumit Nanda Real Estate, where your real estate journey begins. Sumit Nanda, a top-producing real estate advisor, is here to redefine your real estate experience in Calgary and its surrounding communities. Our website provides valuable insights into buying and selling homes, along with expert tools such as the Home Evaluator and Mortgage Calculator to empower your homeownership dreams. With a focus on blending financial wisdom with lifestyle enhancement, we offer personalized guidance to help you achieve your real estate aspirations. Contact us for a free 30-minute appointment and discover the full potential of your property. Sumit Nanda Real Estate, located at 2750 22 St NE #206, Calgary, AB T2E 7L9, is dedicated to making your real estate dreams a reality.",
    keywords:
        "Sumit Nanda Real Estate, Real Estate Agent, Buyer, Seller, Firm listings, Home evaluator, Mortgage calculator, Calgary real estate, Real estate advisor, Realtor, Calgary communities, Real estate experience, Personalized guidance, Dream home, Selling journey, Lifestyle enhancement, Financial wisdom, Home evaluation, Property value, Monthly payments, Homeownership dreams",
    applicationName: "Sumit Nanda Real Estate",
    category: "Real Estate Services",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Sumit Nanda Real Estate",
    },
    creator: "Armaan Singh Jaj",
    openGraph: {
        type: "website",
        url: "https://www.sumitnanda.ca",
        title: "Sumit Nanda Real Estate",
        description:
            "Welcome to Sumit Nanda Real Estate, where your real estate journey begins. Sumit Nanda, a top-producing real estate advisor, is here to redefine your real estate experience in Calgary and its surrounding communities. Our website provides valuable insights into buying and selling homes, along with expert tools such as the Home Evaluator and Mortgage Calculator to empower your homeownership dreams. With a focus on blending financial wisdom with lifestyle enhancement, we offer personalized guidance to help you achieve your real estate aspirations. Contact us for a free 30-minute appointment and discover the full potential of your property. Sumit Nanda Real Estate, located at 2750 22 St NE #206, Calgary, AB T2E 7L9, is dedicated to making your real estate dreams a reality.",
        siteName: "Sumit Nanda Real Estate",
        images: [
            {
                url: "https://github.com/armaanjaj/portfolio_v2/assets/113659942/0820ca6b-602a-425f-a64f-50e5f601d570",
            },
        ],
    },
};

export const viewport: Viewport = {
    themeColor: '#000000',
  }

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
            <NextTopLoader
        color="red" showSpinner={false}/>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
