import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

  const cookieRefreshToken = request.cookies.get('token')?.value

  if (!cookieRefreshToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/category/:path*',
    '/data/:path*',
    '/preferences/:path*',
    '/users/:path*',
  ],
}