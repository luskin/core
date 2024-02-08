import { initializeApp, getApps, FirebaseApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

class FirebaseClientStatic {
  private _firebaseApp: FirebaseApp

  public constructor() {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    }

    this._firebaseApp =
      getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
  }

  public get app(): FirebaseApp {
    return this._firebaseApp
  }

  public get auth() {
    return getAuth(this._firebaseApp)
  }
}

export const firebaseClient = new FirebaseClientStatic()
