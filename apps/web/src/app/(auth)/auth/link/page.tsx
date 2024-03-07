import { Button } from '@/ui/components/button';
import { Separator } from '@/ui/components/separator';
import { Heading, Paragraph } from '@/ui/components/typography';
import { Column } from '@/ui/layout/flex';
import Link from 'next/link';

/**
 * This page is displayed when a user attempts to login to an account that is already linked to another account.
 *
 * @param props
 * @returns
 * @todo This flow needs to be designed and handled better, but it's an edge case so we will just display this for now.
 */
export default function AuthRedirectLink() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Column className={'max-w-[450px] rounded-lg bg-white p-4 shadow-lg'} gap={4}>
        <Heading size={'md'} variant={'destructive'}>
          Account linking required
        </Heading>
        <Paragraph>
          This email is linked to another account. Please login using the existing account method and link your account
          in profile settings.
        </Paragraph>
        <Separator />
        <Paragraph variant={'secondary'}>
          Once you have logged in using one of the methods below, you may link new accounts in your account settings.
        </Paragraph>
        <Link href={'/login'}>
          <Button className="btn btn-primary" variant={'secondary'} size={'lg'}>
            Sign in with another method
          </Button>
        </Link>
      </Column>
    </div>
  );
}
