import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Redirect root to English or detect browser language
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
