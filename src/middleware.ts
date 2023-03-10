import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const isLoggedIn = req.cookies.get("isLoggedIn");

  if (!isLoggedIn) {
    const url = req.nextUrl.clone();
    url.pathname = "sign-in";

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/post/new", "/post/:id*"],
};
