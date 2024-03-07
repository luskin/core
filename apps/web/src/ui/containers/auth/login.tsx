'use client';
import { signIn } from 'next-auth/react';
import { Column } from '@/ui/layout/flex';
import { Button } from '../../components/button';
import Script from 'next/script';
import { GoogleAuthProvider, OAuthProvider, signInWithEmailAndPassword, signInWithRedirect } from 'firebase/auth';
import { firebaseClient } from '@/lib/auth/firebase.client';

interface LoginProps {}

export function Login(_props: LoginProps) {
  const onClick = async (provider: 'google' | 'microsoft') => {
    // signIn(provider, {
    //   callbackUrl: '/',
    // });
    await signInWithRedirect(
      firebaseClient.auth,
      provider === 'google' ? new GoogleAuthProvider() : new OAuthProvider('microsoft.com')
    );
    // await signInWithEmailAndPassword(firebaseClient.auth, 'gregg@mothership.com', 'testing');
  };

  return (
    <Column gap={2} className={'w-full'}>
      <Script src="https://accounts.google.com/gsi/client" strategy="afterInteractive" />
      <Button variant={'secondary'} size={'lg'} icon="plus" className="w-full" onClick={() => onClick('google')}>
        Sign in with Google
      </Button>
      <Button
        variant={'secondary'}
        size={'lg'}
        icon="plus"
        className="mt-2 w-full"
        onClick={() => onClick('microsoft')}
      >
        Sign in with Microsoft
      </Button>
    </Column>
  );
}
