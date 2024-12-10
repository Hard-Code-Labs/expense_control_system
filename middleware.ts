import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
  
  //! Falta agregar validación para el token
  const jwt = true;

  if (jwt === undefined){
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/category/:path*', '/data/:path*', '/preferences/:path*'],
}