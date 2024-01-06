import {
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged as firebaseOnAuthStateChanged,
  User as FirebaseAuthUser,
} from "firebase/auth"
import { firebaseAuth } from "./firebase.config"
import { Identity } from "./identity"

class AuthStatic {
  onAuthStateChanged(callback: (identity: Identity | null) => void) {
    return firebaseOnAuthStateChanged(firebaseAuth, (fbAuthUser) => {
      const identity = fbAuthUser
        ? this.mapFirebaseAuthToIdentity(fbAuthUser)
        : null
      callback(identity)
    })
  }

  async signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<Identity> {
    try {
      console.log("Attempting to sign in with email and password")
      const userCredential = await firebaseSignInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      )
      console.log(
        "Successfully signed in with email and password",
        userCredential
      )
      return this.mapFirebaseAuthToIdentity(userCredential.user)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async signInWithGoogle() {
    const provider = new GoogleAuthProvider()

    try {
      await signInWithRedirect(firebaseAuth, provider)
    } catch (error) {
      console.error("Error signing in with Google", error)
    }
  }

  async signOut(): Promise<void> {
    return firebaseSignOut(firebaseAuth)
  }

  async getToken(): Promise<string | null> {
    return (await firebaseAuth.currentUser?.getIdToken()) ?? null
  }

  async ready(): Promise<void> {
    return await firebaseAuth.authStateReady()
  }

  get identity(): Identity | null {
    const fbAuthUser = firebaseAuth.currentUser
    if (!fbAuthUser) {
      return null
    }
    return this.mapFirebaseAuthToIdentity(fbAuthUser)
  }

  get id(): string | null {
    return this.identity?.id ?? null
  }

  private mapFirebaseAuthToIdentity(firebaseAuth: FirebaseAuthUser): Identity {
    return {
      id: firebaseAuth.uid,
      email: firebaseAuth.email ?? "",
    }
  }
}

const Auth = new AuthStatic()

export default Auth
