export abstract class AuthProvider {
  abstract signInWithGoogle(): Promise<void>;
  abstract signInWithMicrosoft(): Promise<void>;
  abstract getRedirectResult(): Promise<any>;
  abstract onAuthStateChange(callback: (user: any) => void): () => void;
  abstract signOut(): Promise<boolean>;
}
