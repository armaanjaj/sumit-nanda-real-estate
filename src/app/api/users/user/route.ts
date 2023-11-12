// Import necessary modules and models
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { dbConnect as connect } from "@/dbConfig/dbConfig";

// Connect to the database
connect();

export async function GET(req: NextRequest) {
    try {
        const userId = await getDataFromToken(req);

        const user = await User.findById(userId).select(["-password", "-isAdmin", "-isVerified"]);

        return NextResponse.json({
            message: "User found successfully",
            success: true,
            data: user,
        });

    } catch (error: any) {
        return NextResponse.json(
            { error: error.message, success: false },
            { status: 500 }
        );
    }
}
