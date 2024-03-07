import { AuthMiddlewareOptions } from 'next-firebase-auth-edge/lib/next/middleware';

export const firebaseAuthMiddleware: AuthMiddlewareOptions = {
  loginPath: '/api/login',
  logoutPath: '/api/logout',
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
  cookieName: 'auth-session',
  cookieSignatureKeys: [process.env.AUTH_SECRET as string],
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
};
