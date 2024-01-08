import { ConfigFirebase } from "./firebase"

class ConfigStatic {
  public readonly firebase = new ConfigFirebase()
}

export const Config = new ConfigStatic()
