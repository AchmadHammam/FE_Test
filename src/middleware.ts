import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { GetToken } from "./controller/token";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = await GetToken();
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard", "/laporan", "/master-gerbang"],
};
