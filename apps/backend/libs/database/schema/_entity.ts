import { pgTable, uuid, timestamp } from 'drizzle-orm/pg-core';

export const entity = (
  tableName: string,
  schema: (typeof pgTable)['arguments'][1],
) =>
  pgTable(tableName, {
    id: uuid('id').primaryKey(),
    createdAt: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).notNull().defaultNow(),
    deletedAt: timestamp('deleted_at', { mode: 'date' }),
    ...schema,
  });
