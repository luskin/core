import { schema } from '@database';

export type DbUser = typeof schema.users.$inferSelect;

export type DbUserCreate = typeof schema.users.$inferInsert;
