import { AuthProvider } from "./auth-provider"
import { FirebaseAuthProvider } from "./firebase.auth-provider"

export const auth: AuthProvider = new FirebaseAuthProvider()
