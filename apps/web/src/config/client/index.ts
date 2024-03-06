import { FirebaseClientConfig } from './firebase-client.config';
import { GoogleClientConfig } from './google-client.config';

class ClientConfigStatic {
  public firebase = new FirebaseClientConfig();
  public google = new GoogleClientConfig();
}

export const clientConfig = new ClientConfigStatic();
