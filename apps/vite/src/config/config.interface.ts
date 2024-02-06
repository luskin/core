import { QueryClient } from "@tanstack/react-query"

export interface IFirebaseConfig {
  apiKey: string
  authDomain: string
  projectId: string
}

export interface IConfig {
  baseApiUrl: string
  firebase: IFirebaseConfig
  queryClient: QueryClient
}
