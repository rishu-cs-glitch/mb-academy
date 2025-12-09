import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const path = request.nextUrl.pathname;

  const publicRoutes = ["/welcome", "/login", "/register", "/forgot-password", "/verify-otp"];

  const isPublicRoute = publicRoutes.some((route) => route === path);

  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL("/welcome", request.url));
  }

  if (token && isPublicRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|static|favicon.ico|auth-bg.png).*)"],
};
