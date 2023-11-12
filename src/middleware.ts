import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked 'async' if using awaits inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    const isPublicPath = path === "/admin/login" || path === "/admin/signup";

    const token = request.cookies.get("token")?.value || "";

    if (isPublicPath && token) {
        return NextResponse.redirect(
            new URL("/admin", request.nextUrl)
        );
    }
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/admin/login", request.nextUrl));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/admin", "/admin/login", "/admin/signup", "/admin/:path*"],
};
