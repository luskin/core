'use client';

import { Column } from '@/ui/layout/flex';
import { Button } from '../../components/button';
import Link from 'next/link';
import { useState } from 'react';

interface LoginProps {}

type LoginProvider = 'google' | 'microsoft';

export function Login(_props: LoginProps) {
  const [loggingInProvider, setLoggingInProvider] = useState<LoginProvider | null>(null);
  return (
    <Column gap={2} className={'w-full'}>
      <Link href={'/auth/redirect/google'} className="w-full">
        <Button
          variant={'secondary'}
          size={'lg'}
          icon="plus"
          className="w-full"
          disabled={Boolean(loggingInProvider)}
          onClick={() => setLoggingInProvider('google')}
          loading={loggingInProvider === 'google'}
        >
          Sign in with Google
        </Button>
      </Link>

      <Link href={'/auth/redirect/microsoft'} className="w-full">
        <Button
          variant={'secondary'}
          size={'lg'}
          icon="plus"
          className="mt-2 w-full"
          disabled={Boolean(loggingInProvider)}
          onClick={() => setLoggingInProvider('microsoft')}
          loading={loggingInProvider === 'microsoft'}
        >
          Sign in with Microsoft
        </Button>
      </Link>
    </Column>
  );
}
