import { auth } from '@/lib/next-auth';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

interface AdminBoundaryProps extends PropsWithChildren {
  redirectOnFailHref?: string;
}

export async function AdminBoundary(props: AdminBoundaryProps) {
  const { children, redirectOnFailHref } = props;
  const session = await auth();
  if (session?.user?.email?.endsWith('@mothership.com')) {
    return <>{children}</>;
  } else {
    if (redirectOnFailHref) {
      redirect(redirectOnFailHref);
    }
  }
}
