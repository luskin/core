'use client';

import { auth } from '@/lib/auth/auth';
import { Login } from '@/ui/compounds/auth/login';

export function LoginButton() {
  <Login onSignInWithGoogle={auth.signInWithGoogle} />;
}
