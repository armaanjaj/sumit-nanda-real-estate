import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogItem({ slug, title, date }: any) {
    const [standardDate, setStandardDate] = React.useState("");

    React.useEffect(() => {
        document.title = `${title} | Blogs - Sumit Nanda`;

        setStandardDate(extractFullStandardDate(date));
    }, []);

    const extractFullStandardDate = (dateString: any) => {
        const match = dateString.match(/^(\d{4})-(\d{2})-(\d{2}).+/);

        const year = parseInt(match[1], 10);
        const month = parseInt(match[2], 10) - 1;
        const day = parseInt(match[3], 10);

        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        const formattedDate = `${months[month]} ${day}, ${year}`;

        return formattedDate;
    };

    return (
        <>
            <Link
                href={`/blogs/${slug}`}
                className="flex flex-col justify-center items-center py-10 rounded-md border shadow-md hover:-translate-y-1 transition h-64"
            >
                <Image
                    src={`/tools-see-listings.jpg`}
                    height={200}
                    width={300}
                    alt={`ABC`}
                    className="h-full rounded-lg"
                />
                <div className="px-5 py-3 font-bold">{title}</div>
                <div className="font-light text-sm">
                    {standardDate}
                </div>
            </Link>
        </>
    );
}
