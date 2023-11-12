// Import necessary modules and models
import { NextRequest, NextResponse } from "next/server";
import { dbConnect as connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Connect to the database
connect();

// POST route for creating a new user
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const reqBody = await req.json();
        const { email, password } = reqBody;

        // Check for existing user
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                {
                    error: "No user found with the given credentials.",
                    success: false,
                },
                { status: 400 }
            );
        }

        // Check if password is correct
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return NextResponse.json(
                {
                    error: "Invalid password.",
                    success: false,
                },
                { status: 400 }
            );
        }

        // Create token data
        const tokenData = {
            id: user._id,
            email: user.email,
        };

        console.log('Token Data:', tokenData);
        
        // Create token
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {
            expiresIn: "10d",
        });
        
        console.log('Token Data:', token);

        // Create response
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        });

        // Create response cookie
        response.cookies.set("token", token, {
            httpOnly: true,
        });

        // Return response
        return response;

    } catch (error: any) {
        return NextResponse.json(
            { error: error.message, success: false },
            { status: 500 }
        );
    }
}
