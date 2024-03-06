'use client';
import { Column } from '@/ui/layout/flex';
import { Button } from '../../components/button';
import Script from 'next/script';
import { auth } from '@/lib/auth/auth';

interface LoginProps {}

export function Login(_props: LoginProps) {
  return (
    <Column gap={2} className={'w-full'}>
      <Script src="https://accounts.google.com/gsi/client" strategy="afterInteractive" />
      <Button variant={'secondary'} size={'lg'} icon="plus" className="w-full" onClick={auth.signInWithGoogle}>
        Sign in with Google
      </Button>
      <Button variant={'secondary'} size={'lg'} icon="plus" className="mt-2 w-full" onClick={auth.signInWithMicrosoft}>
        Sign in with Microsoft
      </Button>
    </Column>
  );
}
