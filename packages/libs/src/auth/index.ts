import { FirebaseAuthAdmin } from "./firebase.auth"

class AuthStatic {
  private readonly firebaseAuth: FirebaseAuthAdmin
  public constructor() {
    this.firebaseAuth = new FirebaseAuthAdmin()
  }

  async createUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<string> {
    const uid = await this.firebaseAuth.createUserWithEmailAndPassword(
      email,
      password
    )
    return uid
  }

  async deleteAuthUserByUID(uid: string): Promise<void> {
    await this.firebaseAuth.deleteAuthUserByUID(uid)
  }

  async verifyToken(token: string): Promise<string | null> {
    const decodedToken = await this.firebaseAuth.verifyToken(token)
    return decodedToken
  }
}

export const Auth = new AuthStatic()
