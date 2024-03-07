'use client';

import { useSession } from '@/app/(auth)/_hooks';

export default function Billing() {
  const session = useSession();

  return <div>Billing for {session?.displayName ?? 'Unknown user'}</div>;
}
