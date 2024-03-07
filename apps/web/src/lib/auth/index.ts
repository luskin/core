import {
  GoogleAuthProvider,
  OAuthProvider,
  Unsubscribe,
  User,
  UserCredential,
  fetchSignInMethodsForEmail,
  getRedirectResult,
  onIdTokenChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from 'firebase/auth';
import { firebase } from '../firebase';
import { AuthProviderLinkRequiredError } from './auth.error';

class AuthStatic {
  public async signInWithEmailAndPassword(email: string, password: string): Promise<boolean> {
    const result = await signInWithEmailAndPassword(firebase.auth, email, password);
    return result.user !== null;
  }

  public async signInWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();

    // This is important. This will prompt the user to select an account instead of using the last one.
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    return await signInWithRedirect(firebase.auth, provider);
  }

  public async signInWithMicrosoft(): Promise<void> {
    const provider = new OAuthProvider('microsoft.com');

    provider.setCustomParameters({
      prompt: 'select_account',
    });
    return await signInWithRedirect(firebase.auth, provider);
  }

  public async signOut(): Promise<boolean> {
    await firebase.auth.signOut();
    await fetch('/api/logout');
    return true;
  }

  public onIdTokenChanged(callback: Parameters<typeof onIdTokenChanged>[1]): Unsubscribe {
    return onIdTokenChanged(firebase.auth, callback);
  }

  public onRedirectResult(callback: (credential: UserCredential | null, error?: Error | null) => void): void {
    getRedirectResult(firebase.auth)
      .then((result) => {
        callback(result, null);
      })
      .catch((error) => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          const customData: { email?: string } | undefined = error.customData;
          if (customData?.email) {
            fetchSignInMethodsForEmail(firebase.auth, customData.email).then((methods) => {
              callback(
                null,
                new AuthProviderLinkRequiredError({
                  email: customData.email as string,
                  provider: error.credential?.providerId as 'google.com' | 'microsoft.com',
                  signInMethods: methods as Array<'google.com' | 'microsoft.com' | 'password'>,
                  message:
                    'The email is already associated with a different account. Please sign in with the correct provider and then link the accounts in settings.',
                })
              );
            });
          } else {
            console.error('The email is not available in the custom data.');
          }
        }
        callback(null, error);
      });
  }
}

export const auth = new AuthStatic();
