import { GoogleAuthProvider, getRedirectResult, signInWithRedirect } from 'firebase/auth';
import { AuthProvider } from './auth-provider';
import { firebaseClient } from './firebase.client';
import { APIResponse } from '@/app/api/types/api.response';

export class FirebaseAuthProvider extends AuthProvider {
  async signInWithGoogle(): Promise<boolean> {
    const provider = new GoogleAuthProvider();

    try {
      const userCreds = await signInWithRedirect(firebaseClient.auth, provider);
      // const idToken = await userCreds.user.getIdToken()

      // const response = await fetch("/api/auth/sign-in", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ idToken }),
      // })
      // const resBody = (await response.json()) as unknown as APIResponse<string>
      // if (response.ok && resBody.success) {
      //   return true
      // } else {
      //   return false
      // }
      return true;
    } catch (error) {
      console.error('Error signing in with Google', error);
      return false;
    }
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
