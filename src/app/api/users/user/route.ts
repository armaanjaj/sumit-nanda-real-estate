// Import necessary modules and models
import { NextRequest, NextResponse } from "next/server";
import { dbConnect as connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";

// Connect to the database
connect();

// POST route for creating a new user
export async function GET(req: NextRequest) {
    try {
        const email = req.nextUrl.searchParams.get("email") as string;

        if (email) {
            const user = await User.findOne({ email });

            // Hash email
            const salt = await bcrypt.genSalt(10);
            const hashedEmail = await bcrypt.hash(user.email, salt);

            // check if email is correct
            const validEmail = await bcrypt.compare(email, hashedEmail);

            if (!validEmail) {
                return NextResponse.json(
                    {
                        error: "Invalid email.",
                        success: false,
                    },
                    { status: 400 }
                );
            }

            if (user) {
                return NextResponse.json({
                    message: "User found successfully",
                    success: true,
                    name: user.name,
                });
            } else {
                return NextResponse.json(
                    { error: "User not found", success: false },
                    { status: 404 }
                );
            }
        } else {
        }
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message, success: false },
            { status: 500 }
        );
    }
}
