import { NextResponse } from "next/server";

export async function middleware(request: Request) {
    // Store current request url in a custom header, which you can read later
    const requestHeaders = new Headers(request.headers);

    const u = new URL(request.url);
    requestHeaders.set("x-url", `${process.env.NEXT_PUBLIC_BASE_URL}${u.pathname}?${u.searchParams.toString()}`);

    const response = NextResponse.next({
        request: {
            // Apply new request headers
            headers: requestHeaders
        }
    });

    const { searchParams } = new URL(request.url);
    // 微信授权回调
    const state = searchParams.get("state");
    const code = searchParams.get("code");

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)"
    ]
};
