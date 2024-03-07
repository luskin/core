'use client';

import { auth } from '@/lib/auth/auth';
import { AuthUser } from '@/lib/auth/auth-user';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';

interface ContextProps {
  user?: AuthUser | null;
}

export const AuthContext = createContext<ContextProps>({ user: undefined });

interface AuthProviderProps extends PropsWithChildren {}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<ContextProps['user']>(undefined);
  const router = useRouter();

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribeAuthStateChanged = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log('[auth] User signed in');
      } else {
        setUser(null);
        console.log('[auth] User signed out');
      }
      router.refresh();
    });

    return () => {
      unsubscribeAuthStateChanged();
    };
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext).user;
};
