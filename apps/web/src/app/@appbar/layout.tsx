'use client';
import { Header } from '@/ui/layout/header';
import { AuthenticatedAppBar } from './authenticated';
import { UnauthenticatedAppBar } from './unauthenticated';
import { useSession } from '../(auth)/_hooks';
import { PropsWithChildren } from 'react';

interface AppBarProps extends PropsWithChildren {}

export default function AppBar(props: AppBarProps) {
  const session = useSession();
  console.log('App bar session:', session);
  return (
    <Header>
      <div className="flex-1">{props.children}</div>
      {session ? <AuthenticatedAppBar /> : <UnauthenticatedAppBar />}
    </Header>
  );
}
