import { envUtils, numUtils } from "@shared/utils"

type IConfigDatabase = {
  host: string
  port: number
  user: string
  password: string
  database: string
}

export class ConfigDatabase implements IConfigDatabase {
  public readonly host: string = envUtils.getOrThrow("POSTGRES_HOST")
  public readonly port: number = numUtils.toNumber(
    envUtils.getOrThrow("POSTGRES_PORT")
  )
  public readonly user: string = envUtils.getOrThrow("POSTGRES_USER")
  public readonly password: string = envUtils.getOrThrow("POSTGRES_PASSWORD")
  public readonly database: string = envUtils.getOrThrow("POSTGRES_DB")
}
