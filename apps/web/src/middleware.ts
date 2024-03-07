import { NextRequest, NextResponse } from 'next/server';
import { authMiddleware } from 'next-firebase-auth-edge';

export async function middleware(request: NextRequest) {
  return authMiddleware(request, {
    loginPath: '/api/login',
    logoutPath: '/api/logout',
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
    cookieName: 'AuthToken',
    cookieSignatureKeys: [process.env.AUTH_SECRET as string, 'secret2'],
    cookieSerializeOptions: {
      path: '/',
      httpOnly: true,
      secure: false, // Set this to true on HTTPS environments
      sameSite: 'lax' as const,
      maxAge: 60 * 60 * 60 * 24, // sixty days
    },
    serviceAccount: {
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
      clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL as string,
      privateKey: process.env.FIREBASE_PRIVATE_KEY as string,
    },
  });
}

export const config = {
  matcher: ['/api/login', '/api/logout', '/', '/((?!_next|favicon.ico|api|.*\\.).*)'],
};
