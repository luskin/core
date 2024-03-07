// 'use client';
import { auth } from '@/lib/auth';
import { DropdownMenuItem } from '@/ui/components/dropdown';
import { notification } from '@/ui/components/notification';
import { useEffect } from 'react';
import { useAsyncFn } from 'react-use';

interface SignOutProps {}

export function SignOut(_props: SignOutProps) {
  const [signOutState, signOut] = useAsyncFn(auth.signOut);

  /**
   * Show error notification if sign out failed
   */
  useEffect(() => {
    if (signOutState.error) {
      notification.error({
        title: 'Failed to sign out',
        description: signOutState.error.message,
      });
    }
  }, [signOutState.error]);

  return (
    <>
      <DropdownMenuItem
        icon="logout"
        destructive
        className="mt-2"
        onClick={signOut}
        loading={signOutState.loading}
        disabled={signOutState.loading}
      >
        Log out
      </DropdownMenuItem>
    </>
  );
}
