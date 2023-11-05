import { dbConnect as connect } from "@/dbConfig/dbConfig";
// import Review from "@/models/reviewModel";
import { NextRequest, NextResponse } from "next/server";
import NodeCache from "node-cache";

// connect();

const cache = new NodeCache({
    stdTTL: 1800,
    checkperiod: 300,
});

export async function GET() {
    // try {
    //     const cachedReviews = cache.get("reviews");

    //     if (cachedReviews) {
    //         return NextResponse.json({ reviews: cachedReviews });
    //     }

    //     const reviews = await Review.find({});
    //     cache.set("reviews", reviews);

    //     return NextResponse.json({ reviews });
    // } catch (error: any) {
    //     return NextResponse.json({ error: error.message }, { status: 500 });
    // }
}
export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        
        console.log(reqBody);

        // Check for existing visitor
        // const visitor = await Review.findOne({ name });

        // if (visitor) {
        //     return NextResponse.json(
        //         {
        //             error: "Already posted. No more than one review allowed per person.",
        //         },
        //         { status: 400 }
        //     );
        // }

        // const review = new Review({
        //     name,
        //     comment,
        //     rating,
        // });

        // const savedReview = await review.save();

        // // Clear the cached reviews to refresh the cache
        // cache.del("reviews");

        return NextResponse.json({
            message: "Review saved successfully",
            success: true,
            // savedReview,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
