import Config from "@/config"
import { FirebaseOptions, getApp, getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig: FirebaseOptions = {
  // These cannot come from config since that is only available on the server
  apiKey: Config.firebase.apiKey,
  authDomain: Config.firebase.authDomain,
  projectId: Config.firebase.projectId,
}

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

export const firebaseAuth = getAuth(app)
