'use client';
import { Header } from '@/ui/layout/header';
import { AuthenticatedAppBar } from './authenticated';
import { UnauthenticatedAppBar } from './unauthenticated';
import { useSession } from '../(auth)/_hooks';

export default function AppBar() {
  const session = useSession();
  return <Header>{session ? <AuthenticatedAppBar /> : <UnauthenticatedAppBar />}</Header>;
}
