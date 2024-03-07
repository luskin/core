'use client';

import { useSession } from '@/app/(auth)/_hooks';

export default function TestComponent() {
  const session = useSession();

  return (
    <div>
      <h1>Test Component</h1>
      <p>{session?.email}</p>
    </div>
  );
}
