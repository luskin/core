import {
  GoogleAuthProvider,
  OAuthProvider,
  Unsubscribe,
  User,
  onIdTokenChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from 'firebase/auth';
import { firebase } from '../firebase';

class AuthStatic {
  public async signInWithEmailAndPassword(email: string, password: string): Promise<boolean> {
    const result = await signInWithEmailAndPassword(firebase.auth, email, password);
    return result.user !== null;
  }

  public async signInWithGoogle(): Promise<void> {
    return await signInWithRedirect(firebase.auth, new GoogleAuthProvider());
  }

  public async signInWithMicrosoft(): Promise<void> {
    return await signInWithRedirect(firebase.auth, new OAuthProvider('microsoft.com'));
  }

  public async signOut(): Promise<boolean> {
    await firebase.auth.signOut();
    await fetch('/api/logout');
    return true;
  }

  public onIdTokenChanged(callback: Parameters<typeof onIdTokenChanged>[1]): Unsubscribe {
    return onIdTokenChanged(firebase.auth, callback);
  }
}

export const auth = new AuthStatic();
