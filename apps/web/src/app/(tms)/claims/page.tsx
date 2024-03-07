import { session } from '@/lib/auth/auth.session';

export default async function Claims() {
  const user = await session();

  return <div>Claims</div>;
}
