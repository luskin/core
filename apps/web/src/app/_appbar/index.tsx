import { PropsWithChildren } from 'react';
import { AuthenticatedAppBar } from './_authenticated';
import { UnauthenticatedAppBar } from './_unauthenticated';
import { AppbarContent } from './appbar-content';
import { getSession } from '@/lib/auth/auth.session';
import AppBarHeader from './appbar-header';

interface AppBarProps extends PropsWithChildren {}

export default async function AppBar(props: AppBarProps) {
  const session = await getSession();
  return (
    <AppBarHeader>
      <AppbarContent />
      {session ? <AuthenticatedAppBar /> : <UnauthenticatedAppBar />}
    </AppBarHeader>
  );
}
