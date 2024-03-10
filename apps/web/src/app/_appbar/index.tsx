import { Header } from '@/ui/layout/header';
import { PropsWithChildren } from 'react';
import { AuthenticatedAppBar } from './_authenticated';
import { UnauthenticatedAppBar } from './_unauthenticated';
import { AppbarContent } from './appbar-content';
import { getSession } from '@/lib/auth/auth.session';

interface AppBarProps extends PropsWithChildren {}

export default async function AppBar(props: AppBarProps) {
  const session = await getSession();
  return (
    <Header>
      <AppbarContent />
      {session ? <AuthenticatedAppBar /> : <UnauthenticatedAppBar />}
    </Header>
  );
}
