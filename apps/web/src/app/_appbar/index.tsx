'use client';
import { Header } from '@/ui/layout/header';
import { PropsWithChildren } from 'react';
import { useSession } from '../(auth)/_hooks';
import { AuthenticatedAppBar } from './_authenticated';
import { UnauthenticatedAppBar } from './_unauthenticated';
import { AppbarContent } from './appbar-content';

interface AppBarProps extends PropsWithChildren {}

export default function AppBar(props: AppBarProps) {
  const session = useSession();
  return (
    <Header>
      <AppbarContent />
      {session ? <AuthenticatedAppBar /> : <UnauthenticatedAppBar />}
    </Header>
  );
}
