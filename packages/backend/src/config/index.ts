import { ConfigEnvironment } from "./environment"
import { ConfigFirebase } from "./firebase"
import { ConfigDatabase } from "./database"

class ConfigStatic {
  public readonly environment = new ConfigEnvironment()
  public readonly firebase = new ConfigFirebase()
  public readonly database = new ConfigDatabase()
}

const config = new ConfigStatic()

export default config

export { ConfigEnvironment }