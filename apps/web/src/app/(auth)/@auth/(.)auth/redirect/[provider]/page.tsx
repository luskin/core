'use client';
import { auth } from '@/lib/auth/auth';

interface RedirectPageProps {
  params: {
    provider: string;
  };
}

export default function AuthRedirectIntercept({ params }: RedirectPageProps) {
  switch (params.provider) {
    case 'google':
      auth.signInWithGoogle();
      break;
    case 'microsoft':
      auth.signInWithMicrosoft();
      break;
    default:
      console.error(`Invalid auth redirect provider: ${params.provider}`);
  }

  return null;
}
