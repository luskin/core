'use client';
import { Header } from '@/ui/layout/header';
import { AuthenticatedAppBar } from './authenticated';
import { UnauthenticatedAppBar } from './unauthenticated';
import { useAuth } from '../_providers/auth.context';

export default function AppBar() {
  const { user } = useAuth();
  return <Header>{user ? <AuthenticatedAppBar /> : <UnauthenticatedAppBar />}</Header>;
}
