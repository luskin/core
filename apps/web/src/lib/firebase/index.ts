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
}

export const firebase = new FirebaseClientStatic();
