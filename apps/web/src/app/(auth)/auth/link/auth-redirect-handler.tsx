'use client';

import { useCookie } from 'react-use';
import { Cookies } from '@shared/types';
import { useEffect, useState } from 'react';
import { Spinner } from '@/ui/components/spinner';
import { auth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { notification } from '@/ui/components/notification';
import { AuthProviderLinkRequiredError } from '@/lib/auth/auth.error';
import { useSession } from '../../_hooks';

/**
 * This page is displayed when the user is redirected from the auth provider to the app and
 * the cookie `AuthRedirect` is set true. This page will handle the redirect result and display
 * a spinner while the redirect is being processed.
 */
export function AuthRedirect() {
  const router = useRouter();
  const session = useSession();
  const [, , deleteCookie] = useCookie(Cookies.AuthRedirect);

  useEffect(() => {
    deleteCookie();

    auth.onRedirectResult((result, error) => {
      if (error) {
        if (
          error instanceof AuthProviderLinkRequiredError ||
          (error as any).code === 'auth/account-exists-with-different-credential'
        ) {
          router.replace('/auth/link');
          router.refresh();
        } else {
          notification.error({
            title: 'Problem signing in',
            description: error.message ?? 'An unknown error occurred. Please try again.',
          });
        }
      }
    });

    // Redirect to root after 5 seconds as fallback
    const timeoutId = setTimeout(() => {
      router.replace('/login');
    }, 5000);

    return () => {
      clearTimeout(timeoutId); // Clear the timeout if the component is unmounted before the timeout finishes
    };
  }, []);

  useEffect(() => {
    if (session) {
      router.replace('/');
    }
  }, [session]);

  return <div className="flex h-screen w-screen items-center justify-center">{<Spinner size="lg" />}</div>;
}
