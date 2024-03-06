import {
  GoogleAuthProvider,
  OAuthProvider,
  Unsubscribe,
  UserCredential,
  getRedirectResult,
  signInWithRedirect,
} from 'firebase/auth';
import { AuthProvider } from './auth-provider';
import { firebaseClient } from './firebase.client';
import { APIResponse } from '@/app/api/types/api.response';

export class FirebaseAuthProvider extends AuthProvider {
  async signInWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(firebaseClient.auth, provider);
  }

  async signInWithMicrosoft(): Promise<void> {
    const provider = new OAuthProvider('microsoft.com');
    signInWithRedirect(firebaseClient.auth, provider);
  }

  onAuthStateChange(callback: (user: any) => void): Unsubscribe {
    return firebaseClient.auth.onAuthStateChanged(callback);
  }

  async getRedirectResult(): Promise<UserCredential | null> {
    return await getRedirectResult(firebaseClient.auth);
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
