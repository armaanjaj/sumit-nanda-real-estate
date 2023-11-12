// Import necessary modules and models
import { NextRequest, NextResponse } from "next/server";
import { dbConnect as connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

// Connect to the database
connect();

// GET route for fetching user details
export async function GET(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { username, password } = reqBody;

        const user = await User.findOne({ username });

        if (user) {
            return NextResponse.json(
                {
                    message: "User found successfully",
                    success: true,
                },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                {
                    error: "User not found.",
                    success: false,
                },
                { status: 404 }
            );
        }
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message, success: false },
            { status: 500 }
        );
    }
}

// POST route for creating a new user
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const reqBody = await req.json();
        const { name, username, password } = reqBody;

        // Check for existing user
        const user = await User.findOne({ username });

        if (user) {
            return NextResponse.json(
                {
                    error: "User already exist.",
                    success: false,
                },
                { status: 400 }
            );
        }

        const newUser = new User({
            name,
            username,
            password,
        });

        const savedUser = await newUser.save();

        return NextResponse.json(
            {
                message: "New user created successfully",
                success: true,
                savedUser,
            },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message, success: false },
            { status: 500 }
        );
    }
}
