'use client';

import { auth } from '@/lib/auth/auth';
import { useRouter } from 'next/navigation';
import { DropdownMenuItem } from '@/ui/components/dropdown';

interface SignOutProps {}

export function SignOut(_props: SignOutProps) {
  const router = useRouter();
  async function handleSignOut() {
    const isOk = await auth.signOut();

    if (isOk) {
      router.refresh();
    }
  }

  return (
    <DropdownMenuItem icon="logout" destructive className="mt-2" onClick={handleSignOut}>
      Log out
    </DropdownMenuItem>
  );
}
