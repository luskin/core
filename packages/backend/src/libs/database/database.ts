import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres"
import { Client } from "pg"
import config from "@config"
import * as schema from "./schema"

class ConnectionStatic {
  private _client: Client = new Client({
    host: config.database.host,
    port: config.database.port,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database,
  })

  private _db: NodePgDatabase<typeof schema> | null = null

  public constructor() {
    this._db = drizzle(this._client, {
      schema,
    })
  }

  public get db(): NodePgDatabase<typeof schema> {
    if (!this._db) {
      throw new Error("Database not initialized")
    }
    return this._db
  }

  public get client(): Client {
    return this._client
  }

  public async connect(): Promise<void> {
    await this._client.connect()
  }

  public async disconnect(): Promise<void> {
    await this._client.end()
  }
}

export const databaseConnection = new ConnectionStatic()

export const database = databaseConnection.db
