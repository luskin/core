import { IConfig } from "./config.interface"
import { getEnvOrThrow } from "@repo/utils/env"

class ConfigStatic implements IConfig {
  public declare readonly baseApiUrl: string

  constructor() {
    this.baseApiUrl = getEnvOrThrow("BASE_API_URL")
  }
}

export const Config = new ConfigStatic()
