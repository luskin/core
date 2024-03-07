'use client';
import { Column } from '@/ui/layout/flex';
import { Button } from '../../components/button';
import { useAsyncFn, useCookie } from 'react-use';
import { auth } from '@/lib/auth';
import { Cookies } from '@shared/types';

interface LoginProps {}

export function Login(_props: LoginProps) {
  const [, setIsFromAuthRedirect] = useCookie(Cookies.AuthRedirect);
  const [onSignInWithGoogleState, onSignInWithGoogle] = useAsyncFn(auth.signInWithGoogle);
  const [onSignInWithMicrosoftState, onSignInWithMicrosoft] = useAsyncFn(auth.signInWithMicrosoft);
  const [onSignInWithEmailAndPasswordState, onSignInWithEmailAndPassword] = useAsyncFn(() =>
    auth.signInWithEmailAndPassword('gregg@mothership.com', 'testing')
  );

  function onSignInWithProvider(provider: 'google' | 'microsoft') {
    setIsFromAuthRedirect('true');
    if (provider === 'google') {
      onSignInWithGoogle();
    } else if (provider === 'microsoft') {
      onSignInWithMicrosoft();
    } else {
      throw new Error(`Invalid provider: ${provider}`);
    }
  }

  return (
    <Column gap={2} className={'w-full'}>
      <Button
        variant={'primary'}
        size={'lg'}
        icon="plus"
        className="w-full"
        loading={onSignInWithEmailAndPasswordState.loading}
        onClick={onSignInWithEmailAndPassword}
      >
        Sign in with Email
      </Button>
      <Button
        variant={'secondary'}
        size={'lg'}
        icon="plus"
        className="w-full"
        loading={onSignInWithGoogleState.loading}
        onClick={() => onSignInWithProvider('google')}
      >
        Sign in with Google
      </Button>
      <Button
        variant={'secondary'}
        size={'lg'}
        icon="plus"
        className="mt-2 w-full"
        loading={onSignInWithMicrosoftState.loading}
        onClick={() => onSignInWithProvider('microsoft')}
      >
        Sign in with Microsoft
      </Button>
    </Column>
  );
}
