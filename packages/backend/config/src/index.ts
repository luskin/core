import { envUtils } from "@shared/utils"
import { ConfigEnvironment } from "./environment"
import { ConfigFirebase } from "./firebase"
import { ConfigDatabase } from "./database"

class BackendConfigStatic {
  public readonly PORT = envUtils.getOrThrow("PORT")

  public readonly environment = new ConfigEnvironment()
  public readonly firebase = new ConfigFirebase()
  public readonly database = new ConfigDatabase()
}

export const config = new BackendConfigStatic()
