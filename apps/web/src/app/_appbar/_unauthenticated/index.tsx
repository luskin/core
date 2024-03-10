'use client';
import Link from 'next/link';
import { Row } from '../../../ui/layout/flex';
import { Button } from '@/ui/components/button';

interface UnauthenticatedHeaderActionsProps {}

export function UnauthenticatedAppBar(_props: UnauthenticatedHeaderActionsProps) {
  return (
    <Row gap={2} justify="end" className={'flex-1'}>
      <Link href="/become-a-carrier">
        <Button variant={'ghost'} icon="truckSideRight">
          Drive with us
        </Button>
      </Link>
      <Link href="/sign-up">
        <Button variant={'ghost'} icon="magicStars">
          Sign up in 30 seconds
        </Button>
      </Link>
      <Link href="/sign-in">
        <Button variant={'ghost'} icon="userFlat">
          Sign in
        </Button>
      </Link>
    </Row>
  );
}
