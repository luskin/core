'use client';

import * as React from 'react';
import { IdTokenResult, User as FirebaseUser } from 'firebase/auth';
import { filterStandardClaims } from 'next-firebase-auth-edge/lib/auth/claims';
import { AuthContext, User } from './auth.context';
import { auth } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export interface AuthProviderProps {
  serverUser: User | null;
  children: React.ReactNode;
}

function toUser(user: FirebaseUser, idTokenResult: IdTokenResult): User {
  return {
    ...user,
    token: idTokenResult.token,
    customClaims: filterStandardClaims(idTokenResult.claims),
  };
}

export const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({ serverUser, children }) => {
  const router = useRouter();
  const [user, setUser] = React.useState(serverUser);

  const handleIdTokenChanged = async (firebaseUser: FirebaseUser | null) => {
    if (firebaseUser) {
      const idTokenResult = await firebaseUser.getIdTokenResult();

      // Sets authenticated user cookies
      await fetch('/api/login', {
        headers: {
          Authorization: `Bearer ${idTokenResult.token}`,
        },
      });

      setUser(toUser(firebaseUser, idTokenResult));
      return;
    }

    // Removes authenticated user cookies
    await fetch('/api/logout');
    setUser(null);
    router.refresh();
  };

  React.useEffect(() => {
    return auth.onIdTokenChanged(handleIdTokenChanged);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
