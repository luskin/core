import { clientConfig } from '@/config/client';
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

class FirebaseClientStatic {
  private _firebaseApp: FirebaseApp;

  public constructor() {
    const firebaseConfig = {
      apiKey: clientConfig.firebase.apiKey,
      authDomain: clientConfig.firebase.authDomain,
      projectId: clientConfig.firebase.projectId,
    };

    this._firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  }

  public get app(): FirebaseApp {
    return this._firebaseApp;
  }

  public get auth() {
    return getAuth(this._firebaseApp);
  }

  public async signInWithGoogle() {
    // if (!clientConfig.google.clientId || !clientConfig.google.redirectUri) {
    //   throw new Error('Google client ID and redirect URI are required to sign in with Google');
    // }
    // const codeClient = google.accounts.oauth2.initCodeClient({
    //   client_id: clientConfig.google.clientId,
    //   scope: 'openid email profile',
    //   ux_mode: 'redirect',
    //   redirect_uri: clientConfig.google.redirectUri,
    // });
    // codeClient.requestCode();
  }

  public async signInWithMicrosoft() {
    console.log('TODO - Implement sign in with Microsoft');
  }
}

export const firebaseClient = new FirebaseClientStatic();
