import { User } from '@/app/_providers/auth.context';
import { Tokens, getTokens } from 'next-firebase-auth-edge';
import { filterStandardClaims } from 'next-firebase-auth-edge/lib/auth/claims';
import { cookies } from 'next/headers';

const toUser = ({ decodedToken }: Tokens): User => {
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
  };
};

export async function session(): Promise<User | null> {
  const tokens = await getTokens(cookies(), {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
    cookieName: 'AuthToken',
    cookieSignatureKeys: [process.env.AUTH_SECRET as string, 'secret2'],
    serviceAccount: {
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
      clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL as string,
      privateKey: process.env.FIREBASE_PRIVATE_KEY as string,
    },
  });
  const session = tokens ? toUser(tokens) : null;
  return session;
}
