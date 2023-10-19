import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";

export async function POST(request: NextRequest) {
    if (request.method !== "POST") {
        return NextResponse.json({ message: "Method not allowed" });
    }
    try {
        const reqBody = await request.json();
        const {
            Name,
            Email,
            Phone,
            Reason,
            Address,
            TextArea,
            TermsAndCondition,
        } = reqBody;

        if (
            TermsAndCondition === "" ||
            TermsAndCondition === undefined ||
            TermsAndCondition === null
        ) {
            return NextResponse.json(
                { error: "Form not submitted" },
                { status: 400 }
            );
        }

        await sendEmail({ to: Email });

        const response = NextResponse.json({
            message: "Form submitted successfully",
            success: true,
        });

        return response;
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
