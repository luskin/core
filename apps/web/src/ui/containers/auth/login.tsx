'use client';
import { Column } from '@/ui/layout/flex';
import { Button } from '../../components/button';
import { useAsyncFn } from 'react-use';
import { auth } from '@/lib/auth';

interface LoginProps {}

export function Login(_props: LoginProps) {
  const [onSignInWithGoogleState, onSignInWithGoogle] = useAsyncFn(auth.signInWithGoogle);
  const [onSignInWithMicrosoftState, onSignInWithMicrosoft] = useAsyncFn(auth.signInWithGoogle);

  return (
    <Column gap={2} className={'w-full'}>
      <Button
        variant={'secondary'}
        size={'lg'}
        icon="plus"
        className="w-full"
        loading={onSignInWithGoogleState.loading}
        onClick={onSignInWithGoogle}
      >
        Sign in with Google
      </Button>
      <Button
        variant={'secondary'}
        size={'lg'}
        icon="plus"
        className="mt-2 w-full"
        loading={onSignInWithMicrosoftState.loading}
        onClick={onSignInWithMicrosoft}
      >
        Sign in with Microsoft
      </Button>
    </Column>
  );
}
