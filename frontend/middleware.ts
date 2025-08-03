// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('refreshToken')?.value;
  
  // Get the pathname from the URL
  const path = request.nextUrl.pathname;

  // Redirect unauthenticated users trying to access protected pages
  if (!token && (
    path.startsWith('/admin/') || 
    path.startsWith('/user/') ||
    path.startsWith('/dashboard') || 
    path.startsWith('/profile') || 
    path.startsWith('/settings')
  )) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// 🔒 Apply to protected routes only
export const config = {
  matcher: [
    '/admin/:path*', 
    '/user/:path*', 
    '/dashboard/:path*', 
    '/profile/:path*', 
    '/settings/:path*'
  ],
};
