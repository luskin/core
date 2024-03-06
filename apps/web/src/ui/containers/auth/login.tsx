'use client';
import { Column } from '@/ui/layout/flex';
import { Button } from '../../components/button';
import { auth } from '@/lib/auth/auth';
import Link from 'next/link';

interface LoginProps {}

export function Login(_props: LoginProps) {
  return (
    <Column gap={2} className={'w-full'}>
      <Link href={'/auth/redirect/google'} className="w-full">
        <Button variant={'secondary'} size={'lg'} icon="plus" className="w-full" onClick={auth.signInWithGoogle}>
          Sign in with Google
        </Button>
      </Link>

      <Link href={'/auth/redirect/microsoft'} className="w-full">
        <Button
          variant={'secondary'}
          size={'lg'}
          icon="plus"
          className="mt-2 w-full"
          onClick={auth.signInWithMicrosoft}
        >
          Sign in with Microsoft
        </Button>
      </Link>
    </Column>
  );
}
