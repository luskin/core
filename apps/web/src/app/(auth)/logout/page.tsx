'use client';
import { firebaseClient } from '@/lib/auth/firebase.client';
import { Button } from '@/ui/components/button';
import { Spinner } from '@/ui/components/spinner';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignOutPage() {
  const [isSigningOut, setIsSigningOut] = useState(false);
  const router = useRouter();
  async function onSignOut() {
    setIsSigningOut(true);
    await signOut(firebaseClient.auth);
    await fetch('/api/logout');
    setIsSigningOut(false);
    router.refresh();
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Button onClick={onSignOut} size={'lg'}>
        {isSigningOut ? <Spinner /> : <>Sign out</>}
      </Button>
    </div>
  );
}
