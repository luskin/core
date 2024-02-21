import { users } from "@libs/database/schema"

export type DbUser = typeof users.$inferSelect

export type DbUserCreate = typeof users.$inferInsert
