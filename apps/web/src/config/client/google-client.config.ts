export class GoogleClientConfig {
  public readonly clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  public readonly redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
}
