'use client';

import * as React from 'react';
import { IdTokenResult, User as FirebaseUser } from 'firebase/auth';
import { filterStandardClaims } from 'next-firebase-auth-edge/lib/auth/claims';
import { auth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { Session, SessionUser } from '@/lib/auth/auth.session';

function toSessionUser(user: FirebaseUser, idTokenResult: IdTokenResult): SessionUser {
  return {
    ...user,
    token: idTokenResult.token,
    customClaims: filterStandardClaims(idTokenResult.claims),
  };
}
export interface AuthProviderProps {
  initialSession: Session;
  children: React.ReactNode;
}

export const AuthContext = React.createContext<SessionUser | null>(null);

export const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({ initialSession, children }) => {
  const router = useRouter();
  const [session, setSession] = React.useState(initialSession);

  /**
   * Whenever the user's auth token changes, this function is called.
   */
  const handleIdTokenChanged = async (firebaseUser: FirebaseUser | null) => {
    if (firebaseUser) {
      const idTokenResult = await firebaseUser.getIdTokenResult();

      // Sets authenticated user cookies
      await fetch('/api/login', {
        headers: {
          Authorization: `Bearer ${idTokenResult.token}`,
        },
      });

      setSession(toSessionUser(firebaseUser, idTokenResult));
      return;
    }

    // Removes authenticated user cookies
    await fetch('/api/logout');
    setSession(null);
    router.refresh();
  };

  React.useEffect(() => {
    return auth.onIdTokenChanged(handleIdTokenChanged);
  }, []);

  return <AuthContext.Provider value={session}>{children}</AuthContext.Provider>;
};
