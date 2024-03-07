import { Button } from '@/ui/components/button';
import { Row } from '../../../ui/layout/flex';
import User from './user';

interface AuthenticatedAppBarProps {}

export function AuthenticatedAppBar(_props: AuthenticatedAppBarProps) {
  return (
    <Row gap={2} className={'flex-1'} justify="end">
      <Button variant={'secondary'} size={'md'} icon="plus" />
      <User />
      <Button variant={'ghost'} size={'md'} icon="bell" />
    </Row>
  );
}
