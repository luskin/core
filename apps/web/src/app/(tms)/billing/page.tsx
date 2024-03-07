'use client';
import { useAuth } from '@/app/_providers/auth.context';
export default function Billing() {
  const { user } = useAuth();
  return <div>Billing for {user?.displayName ?? 'Unknown user'}</div>;
}
