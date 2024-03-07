import { Button } from '@/ui/components/button';
import { Row } from '../../../ui/layout/flex';
import User from './user';
import { auth } from '@/lib/next-auth';

interface AuthenticatedAppBarProps {}

export async function AuthenticatedAppBar(_props: AuthenticatedAppBarProps) {
  const session = await auth();
  console.log('[auth] session', session);
  return (
    <Row gap={2} className={'flex-1'} justify="end">
      <Button variant={'secondary'} size={'md'} icon="plus" />
      <User />
      <Button variant={'ghost'} size={'md'} icon="bell" />
    </Row>
  );
}
