import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres"
import { Client } from "pg"
import { Config } from "../config"
import * as schema from "./schema"

const client = new Client({
  host: Config.database.host,
  port: Config.database.port,
  user: Config.database.user,
  password: Config.database.password,
  database: Config.database.database,
})

export const createDatabaseConnection = async (): Promise<
  NodePgDatabase<typeof schema>
> => {
  await client.connect()
  const db = drizzle(client, {
    schema,
  })
  return db
}
