'use client';

import { Modal } from '@/ui/components/modal';
import { SignIn } from '@/ui/containers/auth/sign-in';
import { useRouter } from 'next/navigation';

export default function SignInInterceptedModal() {
  const router = useRouter();
  return (
    <Modal.Default title="Sign in" open={true} onClose={router.back} noCloseButton={true}>
      <SignIn />
    </Modal.Default>
  );
}
