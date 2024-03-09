'use client';
import { Header } from '@/ui/layout/header';
import { AuthenticatedAppBar } from './authenticated';
import { UnauthenticatedAppBar } from './unauthenticated';
import { useSession } from '../../(auth)/_hooks';
import { PropsWithChildren } from 'react';
import { Row } from '@/ui/layout/flex';

interface AppBarProps extends PropsWithChildren {}

export default function AppBarLayout(props: AppBarProps) {
  const session = useSession();
  return (
    <Header>
      <div className="h-full flex-1">{props.children}</div>
      {session ? <AuthenticatedAppBar /> : <UnauthenticatedAppBar />}
    </Header>
  );
}
