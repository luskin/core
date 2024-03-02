import 'dotenv/config';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { database, connection } from './database';
import { logger } from '@libs/logger';

async function main(): Promise<void> {
  logger.info('Migrating database...');
  await connection.connect();
  await migrate(database, {
    migrationsFolder: './libs/database/migrations',
    migrationsTable: 'migrations',
  });
  logger.info('Database migrated');
}

main()
  .then(() => {
    logger.info('Database migrated successfully');
  })
  .catch((err) => {
    logger.error('Error migrating database', err);
  })
  .finally(() => {
    logger.info('Closing database connection');
    connection.disconnect();
  });
