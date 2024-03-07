import { Login } from '@/ui/containers/auth/login';
import { Heading } from '@/ui/components/typography';
import { Column } from '@/ui/layout/flex';
import { signIn } from '@/lib/next-auth';
import { Button } from '@/ui/components/button';

export default function SignInPage() {
  // return (
  //   <div className="flex h-full w-full items-center justify-center">
  //     <form
  //       action={async () => {
  //         'use server';
  //         await signIn('google');
  //       }}
  //     >
  //       <Button type="submit">Sign in google</Button>
  //     </form>
  //   </div>
  // );
  return (
    <div className="bg-slate-3 flex h-full w-full items-center justify-center">
      <div className="w-[432px] rounded-lg bg-white p-8">
        <Column gap={4} className="w-full">
          <Heading size="md">Sign in</Heading>
          <Login />
        </Column>
      </div>
    </div>
  );
}
