import { GoogleAuthProvider, OAuthProvider, getRedirectResult, signInWithRedirect } from 'firebase/auth';
import { AuthProvider } from './auth-provider';
import { firebaseClient } from './firebase.client';
import { APIResponse } from '@/app/api/types/api.response';

export class FirebaseAuthProvider extends AuthProvider {
  async signInWithGoogle(): Promise<boolean> {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(firebaseClient.auth, provider);
    return true;
  }

  async signInWithMicrosoft(): Promise<boolean> {
    const provider = new OAuthProvider('microsoft.com');
    signInWithRedirect(firebaseClient.auth, provider);
    return true;
  }

  async signOut(): Promise<boolean> {
    try {
      await firebaseClient.auth.signOut();

      const response = await fetch('/api/auth/sign-out', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const resBody = (await response.json()) as unknown as APIResponse<string>;
      if (response.ok && resBody.success) {
        return true;
      } else return false;
    } catch (error) {
      console.error('Error signing out with Google', error);
      return false;
    }
  }
}
