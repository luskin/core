import { Column } from '@/ui/layout/flex';
import { Button } from '../../components/button';

interface LoginProps {
  onSignInWithEmailPassword?: () => void;
  onSignInWithGoogle?: () => void;
  onSignInWithMicrosoft?: () => void;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
}

export function Login({ onSignInWithMicrosoft, onSignInWithGoogle }: LoginProps) {
  return (
    <Column gap={2} className={'w-full'}>
      <Button variant={'secondary'} size={'lg'} icon="plus" className="w-full" onClick={onSignInWithGoogle}>
        Sign in with Google
      </Button>
      <Button
        variant={'secondary'}
        size={'lg'}
        icon="plus"
        className="mt-2 w-full"
        disabled
        onClick={onSignInWithMicrosoft}
      >
        Sign in with Microsoft
      </Button>
    </Column>
  );
}
