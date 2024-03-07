'use client';
import Link from 'next/link';
import { Row } from '../../../ui/layout/flex';
import { Button } from '@/ui/components/button';
import { auth } from '@/lib/auth/auth';

interface UnauthenticatedHeaderActionsProps {}

export function UnauthenticatedAppBar(_props: UnauthenticatedHeaderActionsProps) {
  return (
    <Row gap={2} justify="end" className={'flex-1'}>
      <Link href="/become-a-carrier">
        <Button variant={'tertiary'} icon="truckSideRight">
          Drive with us
        </Button>
      </Link>
      <Link href="/login">
        <Button variant={'ghost'} icon="userFlat">
          Sign in
        </Button>
      </Link>

      {/* <Modal.Default
        title="Sign in"
        trigger={
          <Button variant={'ghost'} icon="userFlat">
            Sign in
          </Button>
        }
        actionButtons={[
          {
            label: 'Forgot password',
            variant: 'secondary',
          },
        ]}
      >
        <Button variant={'secondary'} size={'lg'} icon="plus" className="w-full" onClick={auth.signInWithGoogle}>
          Sign in with Google
        </Button>
        <Button variant={'secondary'} size={'lg'} icon="plus" className="mt-2 w-full" disabled>
          Sign in with Microsoft
        </Button>
      </Modal.Default> */}
    </Row>
  );
}
