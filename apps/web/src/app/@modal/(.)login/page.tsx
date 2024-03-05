'use client';
import { auth } from '@/lib/auth/auth';
import { Button } from '@/ui/components/button';
import { Modal } from '@/ui/components/modal';
import { Login } from '@/ui/compounds/auth/login';
import { useRouter } from 'next/navigation';

export default function LoginInterceptedModal() {
  const router = useRouter();
  return (
    <Modal.Default title="Sign in" open={true} onClose={router.back} noCloseButton={true}>
      <Login onSignInWithGoogle={auth.signInWithGoogle} />
    </Modal.Default>
  );
}
