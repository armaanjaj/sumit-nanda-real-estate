// Import necessary modules and models
import { NextRequest, NextResponse } from "next/server";
import { dbConnect as connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";

// Connect to the database
connect();

// POST route for creating a new user
export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { name, email, password } = reqBody;

        // Check for existing user
        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json(
                {
                    error: "User already exist.",
                    success: false,
                },
                { status: 400 }
            );
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
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
