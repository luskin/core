'use client';

import { auth } from '@/lib/auth/auth';
import { DropdownMenuItem } from '@/ui/components/dropdown';

interface SignOutProps {}

export function SignOut(_props: SignOutProps) {
  async function handleSignOut() {
    await auth.signOut();
  }

  return (
    <DropdownMenuItem icon="logout" destructive className="mt-2" onClick={handleSignOut}>
      Log out
    </DropdownMenuItem>
  );
}
