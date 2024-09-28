import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(req: NextRequest) {
  const isLogin = false;
  if (!isLogin) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.redirect(new URL('/', req.url));
}

export const config = {
  matcher: ['/dashboard/:path*', '/about/:path*'],
};
