'use client';
import { useAuth } from '@/app/_providers/auth.context';

export default function TestComponent() {
  const auth = useAuth();

  return (
    <div>
      <h1>Test Component</h1>
      <p>{auth.user?.email}</p>
    </div>
  );
}
