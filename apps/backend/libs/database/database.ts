import { NodePgDatabase, drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import { Config } from '../../config';
import * as schema from './schema';

class ConnectionStatic {
  private _client: Client = new Client({
    host: Config.database.host,
    port: Config.database.port,
    user: Config.database.user,
    password: Config.database.password,
    database: Config.database.database,
  });

  private _db: NodePgDatabase<typeof schema> | null = null;

  public constructor() {
    this._db = drizzle(this._client, {
      schema,
    });
  }

  public get db(): NodePgDatabase<typeof schema> {
    if (!this._db) {
      throw new Error('Database not initialized');
    }
    return this._db;
  }

  public get client(): Client {
    return this._client;
  }

  public async connect(): Promise<void> {
    await this.client.connect();
  }

  public async disconnect(): Promise<void> {
    await this.client.end();
  }
}

export const Connection = new ConnectionStatic();

export const Database = Connection.db;
