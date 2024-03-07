'use client';

import { useSession } from '@/app/(auth)/_hooks';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

interface AdminBoundaryProps extends PropsWithChildren {
  redirectOnFailHref?: string;
}

export function AdminBoundary(props: AdminBoundaryProps) {
  const { children, redirectOnFailHref } = props;
  const session = useSession();
  if (session?.email?.endsWith('@mothership.com')) {
    return <>{children}</>;
  } else {
    if (redirectOnFailHref) {
      redirect(redirectOnFailHref);
    }
  }
}
