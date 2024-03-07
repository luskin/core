'use client';

import { Modal } from '@/ui/components/modal';
import { Login } from '@/ui/containers/auth/login';
import { useRouter } from 'next/navigation';

export default function LoginInterceptedModal() {
  const router = useRouter();
  return (
    <Modal.Default title="Sign in" open={true} onClose={router.back} noCloseButton={true}>
      <Login />
    </Modal.Default>
  );
}
