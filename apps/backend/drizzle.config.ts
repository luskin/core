import 'dotenv/config';
import type { Config } from 'drizzle-kit';
export default {
  schema: './libs/database/schema/index.ts',
  out: './libs/database/migrations',
  driver: 'pg',
  dbCredentials: {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: Number(process.env.POSTGRES_PORT),
  },
} satisfies Config;
