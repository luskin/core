import { envUtils } from "@shared/utils"

export interface IConfigFirebase {
  apiKey: string
  authDomain: string
  projectId: string
  privateKey: string
  clientEmail: string
}

export class ConfigFirebase implements IConfigFirebase {
  public readonly apiKey: string = envUtils.getOrThrow("FIREBASE_API_KEY")
  public readonly authDomain: string = envUtils.getOrThrow(
    "FIREBASE_AUTH_DOMAIN"
  )
  public readonly projectId: string = envUtils.getOrThrow("FIREBASE_PROJECT_ID")
  public readonly privateKey: string = envUtils.getOrThrow(
    "FIREBASE_PRIVATE_KEY"
  )
  public readonly clientEmail: string = envUtils.getOrThrow(
    "FIREBASE_CLIENT_EMAIL"
  )
}
