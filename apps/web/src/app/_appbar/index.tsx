import { Header } from '@/ui/layout/header';
import { AuthenticatedAppBar } from './authenticated';
import { UnauthenticatedAppBar } from './unauthenticated';
import { auth } from '@/lib/next-auth';

export default async function AppBar() {
  const session = await auth();

  return <Header>{session ? <AuthenticatedAppBar /> : <UnauthenticatedAppBar />}</Header>;
}
