import { text } from "drizzle-orm/pg-core"
import { varchar } from "drizzle-orm/pg-core"
import { uuid } from "drizzle-orm/pg-core"
import { pgTable } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: varchar("email", { length: 256 }),
  phone: varchar("phone", { length: 256 }),

  // Auth Services
  firebaseAuthId: varchar("firebase_auth_id", { length: 256 }),
})
