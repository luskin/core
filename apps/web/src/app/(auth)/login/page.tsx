import { Login } from '@/ui/containers/auth/login';
import { Heading } from '@/ui/components/typography';
import { Column } from '@/ui/layout/flex';
import { cookies } from 'next/headers';
import { Cookies } from '@shared/types';
import { redirect } from 'next/navigation';

export default function SignInPage() {
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
