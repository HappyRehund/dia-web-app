import { NextRequest, NextResponse } from "next/server";
import { stackServerApp } from "./stack";

export async function middleware(request: NextRequest) {
  const user = await stackServerApp.getUser();
  
  // Check if the current path is in the public paths
  const isPublicPath = request.nextUrl.pathname.startsWith('/handler') || 
                      request.nextUrl.pathname.startsWith('/_next') ||
                      request.nextUrl.pathname.startsWith('/api');
                      
  if (!user && !isPublicPath) {
    return NextResponse.redirect(new URL('/handler/sign-in', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!handler|_next/static|_next/image|favicon.ico|api).*)',
  ],
};