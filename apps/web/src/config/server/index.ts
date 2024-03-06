import { FirebaseAdminConfig } from './firebase-admin.config';

class ServerConfigStatic {
  public firebaseAdmin = new FirebaseAdminConfig();
}

export const serverConfig = new ServerConfigStatic();
