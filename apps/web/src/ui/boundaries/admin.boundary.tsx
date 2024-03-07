'use client';

import { useAuth } from '@/app/_providers/auth.context';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

interface AdminBoundaryProps extends PropsWithChildren {
  redirectOnFailHref?: string;
}

export function AdminBoundary(props: AdminBoundaryProps) {
  const { children, redirectOnFailHref } = props;
  const { user } = useAuth();
  if (user?.email?.endsWith('@mothership.com')) {
    return <>{children}</>;
  } else {
    if (redirectOnFailHref) {
      redirect(redirectOnFailHref);
    }
  }
}
