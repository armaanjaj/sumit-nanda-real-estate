import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogItem({ coverImagePath, slug, title, date }: any) {
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
                className="flex flex-col justify-center items-center rounded-lg h-fit border shadow-md hover:-translate-y-1 transition"
            >
                <Image
                    src={`${coverImagePath}`}
                    height={300}
                    width={560}
                    alt={`ABC`}
                    className="max-h-full max-w-full"
                />
                <div className="p-2 flex flex-col justify-center items-center">
                    <div className="px-5 py-3 font-bold">{title}</div>
                    <div className="font-light text-sm">{standardDate}</div>
                </div>
            </Link>
        </>
    );
}
