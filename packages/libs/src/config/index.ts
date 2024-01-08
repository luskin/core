import { ConfigFirebase } from "./firebase"

class ConfigStatic {
  public readonly port = process.env.PORT
  public readonly firebase = new ConfigFirebase()
}

export const Config = new ConfigStatic()
