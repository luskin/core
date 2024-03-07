import { NextRequest } from 'next/server';
import { authMiddleware } from 'next-firebase-auth-edge';
import { firebaseAuthMiddleware } from './lib/auth/auth.middleware';

export async function middleware(request: NextRequest) {
  return authMiddleware(request, firebaseAuthMiddleware);
}

export const config = {
  matcher: ['/api/login', '/api/logout', '/', '/((?!_next|favicon.ico|api|.*\\.).*)'],
};
