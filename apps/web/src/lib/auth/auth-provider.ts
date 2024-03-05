export abstract class AuthProvider {
  abstract getRedirectResult(): Promise<boolean>;
  abstract signInWithGoogle(): Promise<boolean>;
  abstract signOut(): Promise<boolean>;
}
