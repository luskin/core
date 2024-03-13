import { getSession } from '@/lib/auth/auth.session';

export default async function Reporting() {
  const session = await getSession();
  return <div>Reporting for user {session?.displayName ?? 'unauthenticated'}</div>;
}
