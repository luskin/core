export abstract class AuthProvider {
  abstract signInWithGoogle(): Promise<boolean>;
  abstract signInWithMicrosoft(): Promise<boolean>;
  abstract signOut(): Promise<boolean>;
}
