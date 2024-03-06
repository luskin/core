import { envUtils } from "@shared/utils"

export class FirebaseAdminConfig {
  public readonly projectId = envUtils.getOrThrow(
    "NEXT_PUBLIC_FIREBASE_PROJECT_ID"
  )
  public readonly clientEmail = envUtils.getOrThrow(
    "NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL"
  )
  public readonly privateKey = envUtils.getOrThrow("FIREBASE_PRIVATE_KEY")
}
