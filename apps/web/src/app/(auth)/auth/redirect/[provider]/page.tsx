'use client';

import { useAuth } from '@/app/_providers/auth.provider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface RedirectPageProps {
  params: {
    provider: string;
  };
}

/**
 * This page is used to handle the redirect from the auth provider.
 * It should not be used or Linked to directly.
 *
 * Any link to this page should be intercepted by the @auth intercepted page.
 */
export default function AuthRedirectPage({ params }: RedirectPageProps) {
  const router = useRouter();
  const user = useAuth();

  useEffect(() => {
    console.log('The user is: ', user);
    if (typeof user !== 'undefined') {
      // router.replace('/');
    }
  }, [user]);

  return <div>Redirected from {params.provider}</div>;
}
