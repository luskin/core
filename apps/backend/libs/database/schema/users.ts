import { text } from 'drizzle-orm/pg-core';
import { varchar } from 'drizzle-orm/pg-core';
import { entity } from './_entity';

export const users = entity('users', {
  email: varchar('email', { length: 256 }).notNull(),
  status: varchar('status', { length: 256 }).notNull(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name'),
  phone: varchar('phone', { length: 256 }),

  // Auth Services
  firebaseAuthId: varchar('firebase_auth_id', { length: 256 }),
});
