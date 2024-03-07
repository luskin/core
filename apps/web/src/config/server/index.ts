// import { FirebaseAdminConfig } from './firebase-admin.config';
import { GoogleConfig } from './google.config';

class ServerConfigStatic {
  // public firebaseAdmin = new FirebaseAdminConfig();
  public google = new GoogleConfig();
}

export const serverConfig = new ServerConfigStatic();
