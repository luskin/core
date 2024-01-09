import { env } from "@core/utils"

export interface IConfigFirebase {
  apiKey: string
  authDomain: string
  projectId: string
  privateKey: string
  clientEmail: string
}

export class ConfigFirebase implements IConfigFirebase {
  public readonly apiKey: string = env.getOrThrow("FIREBASE_API_KEY")
  public readonly authDomain: string = env.getOrThrow("FIREBASE_AUTH_DOMAIN")
  public readonly projectId: string = env.getOrThrow("FIREBASE_PROJECT_ID")
  public readonly privateKey: string = env.getOrThrow("FIREBASE_PRIVATE_KEY")
  public readonly clientEmail: string = env.getOrThrow("FIREBASE_CLIENT_EMAIL")
}
