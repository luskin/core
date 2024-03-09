import { Button } from '@/ui/components/button';
import { Row } from '../../../../ui/layout/flex';
import User from './user';
import Link from 'next/link';

interface AuthenticatedAppBarProps {}

export function AuthenticatedAppBar(_props: AuthenticatedAppBarProps) {
  return (
    <Row gap={2} justify="end">
      <Link href={'/'}>
        <Button variant={'secondary'} size={'md'} icon="plus" />
      </Link>
      <User />
      <Button variant={'ghost'} size={'md'} icon="bell" />
    </Row>
  );
}
