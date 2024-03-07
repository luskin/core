import { Tokens, getTokens } from 'next-firebase-auth-edge';
import { Claims, filterStandardClaims } from 'next-firebase-auth-edge/lib/auth/claims';
import { cookies } from 'next/headers';
import { firebaseAuthMiddleware } from './auth.middleware';
import { UserInfo as FirebaseUserInfo } from 'firebase/auth';

export interface SessionUser extends FirebaseUserInfo {
  emailVerified: boolean;
  customClaims: Claims;
  token: string;
}

export type Session = SessionUser | null;

const toUser = ({ token, decodedToken }: Tokens): SessionUser => {
  const {
    uid,
    email,
    picture: photoURL,
    email_verified: emailVerified,
    phone_number: phoneNumber,
    name: displayName,
    source_sign_in_provider: signInProvider,
  } = decodedToken;

  const customClaims = filterStandardClaims(decodedToken);

  return {
    uid,
    email: email ?? null,
    displayName: displayName ?? null,
    photoURL: photoURL ?? null,
    phoneNumber: phoneNumber ?? null,
    emailVerified: emailVerified ?? false,
    providerId: signInProvider,
    customClaims,
    token,
  };
};

export async function getSession(): Promise<Session> {
  const tokens = await getTokens(cookies(), {
    apiKey: firebaseAuthMiddleware.apiKey,
    cookieName: firebaseAuthMiddleware.cookieName,
    cookieSignatureKeys: firebaseAuthMiddleware.cookieSignatureKeys,
    serviceAccount: firebaseAuthMiddleware.serviceAccount,
  });

  const session = tokens ? toUser(tokens) : null;
  return session;
}
