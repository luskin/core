import { arrayUtils } from "@core/utils"
import { Cluster, ConfigEnvironment } from "./environment"
import { ConfigFirebase } from "./firebase"

class ConfigStatic {
  public readonly environment = new ConfigEnvironment()
  public readonly firebase = new ConfigFirebase()
}

export const Config = new ConfigStatic()
