import { getSession } from '@/lib/auth/auth.session';

export default async function Claims() {
  const session = await getSession();

  return <div>Claims</div>;
}
