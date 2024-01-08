import * as admin from "firebase-admin"
import { Config } from "../config"

export class FirebaseAuthAdmin {
  private readonly app: admin.app.App

  public constructor() {
    this.app = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: Config.firebase.projectId,
        clientEmail: Config.firebase.clientEmail,
        privateKey: Config.firebase.privateKey,
      }),
    })
  }

  async verifyToken(token: string): Promise<string | null> {
    try {
      const decodedToken = await admin.auth().verifyIdToken(token)
      return decodedToken.uid
    } catch (error) {
      return null
    }
  }
}
