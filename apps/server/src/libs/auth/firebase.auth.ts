import * as admin from 'firebase-admin';
import { config } from '@config';
import { envUtils } from '@shared/utils';

export class FirebaseAuthAdmin {
  private readonly app: admin.app.App;

  private readonly _emulatorHostEnv = 'FIREBASE_AUTH_EMULATOR_HOST';

  public constructor() {
    // Initialize Firebase Admin
    this._validateEmulator();
    this.app =
      admin.apps.length === 0
        ? admin.initializeApp({
            credential: admin.credential.cert({
              projectId: config.firebase.projectId,
              clientEmail: config.firebase.clientEmail,
              privateKey: config.firebase.privateKey,
            }),
          })
        : admin.app();
  }

  async createUserWithEmailAndPassword(email: string, password: string): Promise<string> {
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
    if (config.environment.isDevelopment) {
      envUtils.getOrThrow(this._emulatorHostEnv);
    } else {
      envUtils.throwIfSet(this._emulatorHostEnv);
    }
  }
}
