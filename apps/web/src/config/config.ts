import { QueryClient } from "@tanstack/react-query"
import { IConfig, IFirebaseConfig } from "./config.interface.js"

class ConfigStatic implements IConfig {
  public declare readonly baseApiUrl: string

  public declare readonly firebase: IFirebaseConfig

  public declare readonly queryClient: QueryClient

  constructor() {
    this.baseApiUrl = this._requireEnv("VITE_BASE_API_URL")
    this.firebase = {
      apiKey: this._requireEnv("VITE_FIREBASE_API_KEY"),
      authDomain: this._requireEnv("VITE_FIREBASE_AUTH_DOMAIN"),
      projectId: this._requireEnv("VITE_FIREBASE_PROJECT_ID"),
    }
    this.queryClient = new QueryClient()
  }

  private readonly _requireEnv = (key: string) => {
    const value = import.meta.env[key]
    if (!value) {
      throw new Error(`Missing environment variable ${key}`)
    }
    return value
  }
}

export const Config = new ConfigStatic()
