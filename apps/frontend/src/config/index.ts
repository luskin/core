import { FirebaseAdminConfig } from "./firebase-admin.config"

class ConfigStatic {
  public firebaseAdmin = new FirebaseAdminConfig()
}

export const config = new ConfigStatic()
