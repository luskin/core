import { envUtils } from "@core/utils"

export class FirebaseClientConfig {
  public readonly projectId = envUtils.getOrThrow(
    "NEXT_PUBLIC_FIREBASE_PROJECT_ID"
  )
  public readonly clientEmail = envUtils.getOrThrow(
    "NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL"
  )
  public readonly apiKey = envUtils.getOrThrow("NEXT_PUBLIC_FIREBASE_API_KEY")
  public readonly authDomain = envUtils.getOrThrow(
    "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"
  )
}
