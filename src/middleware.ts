import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_BASE_URL ?? '',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export default withAuth(
  function middleware(req) {
    const { nextUrl, nextauth } = req;
    const { pathname } = nextUrl;
    const { token } = nextauth;
    console.log('🚀 ~ middleware ~ token:', token);

    if (token && pathname == '/login') {
      return NextResponse.redirect(new URL('/', req.url));
    }
    if (token?.role !== 'admin' && pathname == '/dashboard') {
      return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next({ headers: corsHeaders });
  },
  {
    callbacks: {
      authorized: ({ token, req }) => !!token || req.nextUrl.pathname.startsWith('/login'),
    },
  }
);

export const config = {
  matcher: ['/dashboard', '/login'],
};
