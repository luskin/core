import { Button } from '@/ui/components/button';
import Link from 'next/link';

export default function Billing() {
  return (
    <div>
      <Link href="/login">
        <Button variant={'ghost'} icon="userFlat">
          Sign in
        </Button>
      </Link>
      Billing
    </div>
  );
}
