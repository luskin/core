import { signOut } from '@/lib/next-auth';
import { Button } from '@/ui/components/button';
import { redirect } from 'next/navigation';

export default async function SignOutPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <form
        action={async () => {
          'use server';
          await signOut();
          await redirect('/');
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
}
