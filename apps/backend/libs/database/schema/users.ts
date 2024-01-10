import { pgTable, text, varchar } from 'drizzle-orm/pg-core';
import { entityBase } from './_entity';

export const users = pgTable('users', {
  ...entityBase,
  email: varchar('email', { length: 256 }).notNull().unique(),
  status: varchar('status', { length: 256 }).notNull(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name'),
  phone: varchar('phone', { length: 256 }),

  // Auth Services
  firebaseAuthId: varchar('firebase_auth_id', { length: 256 }).unique(),
});
