import { AdminBoundary } from '@/ui/boundaries/admin.boundary';
import { Button } from '@/ui/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/ui/components/dropdown';
import Link from 'next/link';
import { SignOut } from './sign-out';
import { auth } from '@/lib/next-auth';

export default async function User() {
  const session = await auth();
  const user = session?.user;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} size={'md'} icon="userFlat" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{user?.name ?? user?.email ?? 'Account'}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon="userFlat">Profile</DropdownMenuItem>
        <DropdownMenuItem icon="paymentCard">Billing</DropdownMenuItem>
        <DropdownMenuItem icon="trucks">Team</DropdownMenuItem>
        <DropdownMenuItem icon="bell">Inbox</DropdownMenuItem>
        <AdminBoundary>
          <DropdownMenuLabel>Admin</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/design">
            <DropdownMenuItem icon="arrow" description="Colors, components, typography... etc">
              Design System
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem icon="alienShip" description="Company directory">
            Employees
          </DropdownMenuItem>
          <DropdownMenuItem icon="plus">Acquisition</DropdownMenuItem>
          <DropdownMenuItem icon="bell">Actions</DropdownMenuItem>
        </AdminBoundary>
        <SignOut />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
