import { envUtils } from '@shared/utils';

export class GoogleConfig {
  public readonly clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  public readonly clientSecret = process.env.GOOGLE_CLIENT_SECRET;
}
