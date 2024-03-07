// 'use client';
import { DropdownMenuItem } from '@/ui/components/dropdown';
import Link from 'next/link';

interface SignOutProps {}

export function SignOut(_props: SignOutProps) {
  return (
    <Link href="/logout">
      <DropdownMenuItem icon="logout" destructive className="mt-2">
        Log out
      </DropdownMenuItem>
    </Link>
  );
}
