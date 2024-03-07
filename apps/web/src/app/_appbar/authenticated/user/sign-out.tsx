'use client';
import { DropdownMenuItem } from '@/ui/components/dropdown';
import { signOut } from 'next-auth/react';

interface SignOutProps {}

export function SignOut(_props: SignOutProps) {
  const onSignOut = () => {
    signOut({
      callbackUrl: '/',
    });
  };

  return (
    <DropdownMenuItem icon="logout" destructive className="mt-2" onClick={onSignOut}>
      Log out
    </DropdownMenuItem>
  );
}
