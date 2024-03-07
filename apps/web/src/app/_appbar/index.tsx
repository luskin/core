import { Header } from '@/ui/layout/header';
import { firebaseServer } from '@/lib/auth/firebase.server';
import { AuthenticatedAppBar } from './authenticated';
import { UnauthenticatedAppBar } from './unauthenticated';

export default async function AppBar() {
  const user = await firebaseServer.getCurrentUser();
  const authenticated = Boolean(user);
  return <Header>{authenticated ? <AuthenticatedAppBar /> : <UnauthenticatedAppBar />}</Header>;
}
