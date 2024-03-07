type AuthProviderLinkRequiredErrorData = {
  provider: 'google.com' | 'microsoft.com';
  email: string;
  signInMethods: Array<'google.com' | 'microsoft.com' | 'password'>;
  message: string;
};

export class AuthProviderLinkRequiredError extends Error implements AuthProviderLinkRequiredErrorData {
  public readonly provider: AuthProviderLinkRequiredErrorData['provider'];

  public readonly email: AuthProviderLinkRequiredErrorData['email'];

  public readonly signInMethods: AuthProviderLinkRequiredErrorData['signInMethods'];

  constructor(data: AuthProviderLinkRequiredErrorData) {
    super(data.message);
    this.provider = data.provider;
    this.email = data.email;
    this.signInMethods = data.signInMethods;
  }
}
