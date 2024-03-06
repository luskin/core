export class FirebaseClientConfig {
  public readonly projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  public readonly clientEmail = process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL;
  public readonly apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  public readonly authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
}
