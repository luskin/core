import { AuthUser } from './auth-user';

export abstract class AuthProvider {
  abstract signInWithGoogle(): Promise<void>;
  abstract signInWithMicrosoft(): Promise<void>;
  abstract getRedirectResult(): Promise<any>;
  abstract onAuthStateChanged(callback: (user: AuthUser) => void): () => void;
  abstract onIdTokenChanged(callback: (token: string | null) => void): () => void;
  abstract signOut(): Promise<boolean>;
}
