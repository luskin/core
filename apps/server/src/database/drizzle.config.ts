import 'dotenv/config';
import type { Config } from 'drizzle-kit';
import { config } from '@config';
export default {
  schema: './libs/database/schema/index.ts',
  out: './libs/database/migrations',
  driver: 'pg',
  dbCredentials: {
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database,
    port: config.database.port,
  },
} satisfies Config;
