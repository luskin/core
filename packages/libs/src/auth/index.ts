import { FirebaseAuthAdmin } from "./firebase.auth"

class AuthStatic {
  private readonly firebaseAuth: FirebaseAuthAdmin
  public constructor() {
    this.firebaseAuth = new FirebaseAuthAdmin()
  }

  async verifyToken(token: string): Promise<string | null> {
    const decodedToken = await this.firebaseAuth.verifyToken(token)
    return decodedToken
  }
}

export const Auth = new AuthStatic()
