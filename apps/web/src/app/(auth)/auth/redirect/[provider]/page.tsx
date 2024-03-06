'use client';
import { auth } from '@/lib/auth/auth';
import { useEffect } from 'react';

interface RedirectPageProps {
  params: {
    provider: string;
  };
}

export default function RedirectPage({ params }: RedirectPageProps) {
  console.log('The page is rendering');
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChange((user) => {
      console.log('The auth state changed and user is: ', user);

      auth.getRedirectResult().then((result) => {
        console.log('The result is: ', result);

        if (result) {
          console.log('The result is: ', result);
        } else {
          new Promise((resolve) => setTimeout(resolve, 10000)).then(() => {
            console.log('The provider is: ', params.provider);
            switch (params.provider) {
              case 'google':
                return auth.signInWithGoogle();
              case 'microsoft':
                return auth.signInWithMicrosoft();
              default:
                console.error(`Invalid auth redirect provider: ${params.provider}`);
            }
          });
        }
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);
}
