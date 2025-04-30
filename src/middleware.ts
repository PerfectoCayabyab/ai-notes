import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const lang = request.headers.get('accept-language')?.split(',')[0] || 'en';
  request.nextUrl.searchParams.set('lang', lang);
  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  matcher: ['/dashboard', '/note/:path*'],
};