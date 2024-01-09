import 'dotenv/config';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Database, Connection } from './database';
import { Logger } from '@libs/logger';

async function main(): Promise<void> {
  Logger.info('Migrating database...');
  await Connection.connect();
  await migrate(Database, {
    migrationsFolder: './libs/database/migrations',
    migrationsTable: 'migrations',
  });
  Logger.info('Database migrated');
}

main()
  .then(() => {
    Logger.info('Database migrated successfully');
  })
  .catch((err) => {
    Logger.error('Error migrating database', err);
  })
  .finally(() => {
    Logger.info('Closing database connection');
    Connection.disconnect();
  });
