import * as admin from 'firebase-admin';
import { Config } from '../../config';
import { Cluster } from '../../config/environment';
import { envUtils } from '@core/utils';

export class FirebaseAuthAdmin {
  private readonly app: admin.app.App;

  private readonly _emulatorHostEnv = 'FIREBASE_AUTH_EMULATOR_HOST';

  public constructor() {
    // Initialize Firebase Admin
    this._validateEmulator();
    this.app = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: Config.firebase.projectId,
        clientEmail: Config.firebase.clientEmail,
        privateKey: Config.firebase.privateKey,
      }),
    });
  }

  async createUserWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<string> {
    const userRecord = await this.app.auth().createUser({
      email,
      password,
    });
    return userRecord.uid;
  }

  async deleteAuthUserByUID(uid: string): Promise<void> {
    await this.app.auth().deleteUser(uid);
  }

  async verifyToken(token: string): Promise<string | null> {
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      return decodedToken.uid;
    } catch (error) {
      return null;
    }
  }

  async _validateEmulator(): Promise<void> {
    // Validate that the Firebase Auth emulator is running if we're in a local cluster
    if (Config.environment.is(Cluster.Local)) {
      envUtils.getOrThrow(this._emulatorHostEnv);
    }

    // Firebase Auth emulator is not supported in production or staging clusters
    if (Config.environment.is([Cluster.Production, Cluster.Staging])) {
      envUtils.throwIfSet(this._emulatorHostEnv);
    }
  }
}
