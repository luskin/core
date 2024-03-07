import {
  GoogleAuthProvider,
  OAuthProvider,
  Unsubscribe,
  UserCredential,
  getRedirectResult,
  onIdTokenChanged,
  signInWithRedirect,
} from 'firebase/auth';
import { AuthProvider } from './auth-provider';
import { firebaseClient } from './firebase.client';
import { AuthUser } from './auth-user';
import { APIResponse } from '@/app/api/types/api.response';

export class FirebaseAuthProvider extends AuthProvider {
  constructor() {
    super();

    // Store all token changes in HTTP cookie
    onIdTokenChanged(firebaseClient.auth, async (fbUser) => {
      if (fbUser) {
        const token = await fbUser.getIdToken();
        await this._storeToken(token);
      } else {
        await this._revokeToken();
      }
    });
  }

  async signInWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(firebaseClient.auth, provider);
  }

  async signInWithMicrosoft(): Promise<void> {
    const provider = new OAuthProvider('microsoft.com');
    signInWithRedirect(firebaseClient.auth, provider);
  }

  onAuthStateChanged(callback: (user: any) => void): Unsubscribe {
    return firebaseClient.auth.onAuthStateChanged(async (fbUser) => {
      if (fbUser) {
        const token = await fbUser.getIdToken();
        await this._storeToken(token);
        const user: AuthUser = {
          uid: fbUser.uid,
          email: fbUser.email,
          displayName: fbUser.displayName,
          photoURL: fbUser.photoURL,
        };
        callback(user);
      } else {
        callback(null);
      }
    });
  }

  onIdTokenChanged(callback: (token: string | null) => void): Unsubscribe {
    return firebaseClient.auth.onIdTokenChanged(async (fbUser) => {
      if (fbUser) {
        const token = await fbUser.getIdToken();
        callback(token);
      } else {
        callback(null);
      }
    });
  }

  async getRedirectResult(): Promise<UserCredential | null> {
    return await getRedirectResult(firebaseClient.auth);
  }

  async signOut(): Promise<boolean> {
    try {
      await this._revokeToken();
      await firebaseClient.auth.signOut();
      return true;
    } catch (error) {
      console.error('Error signing out with Google', error);
      return false;
    }
  }

  private async _storeToken(idToken: string): Promise<boolean> {
    console.debug('[auth] Storing token');
    const response = await fetch('/api/auth/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken }),
    });
    const resBody = (await response.json()) as unknown as APIResponse<string>;
    if (response.ok && resBody.success) {
      return true;
    } else {
      return false;
    }
  }

  private async _revokeToken(): Promise<boolean> {
    console.debug('[auth] Revoking token');
    const response = await fetch('/api/auth/logout', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });
    const resBody = (await response.json()) as unknown as APIResponse<string>;
    if (response.ok && resBody.success) {
      return true;
    } else return false;
  }
}
