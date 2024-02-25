import "dotenv/config"
import { migrate } from "drizzle-orm/node-postgres/migrator"
import { database, databaseConnection } from "./database"
import { logger } from "@backend/libs/src/logger"

async function main(): Promise<void> {
  logger.info("Migrating database...")
  await databaseConnection.connect()
  await migrate(database, {
    migrationsFolder: "./libs/database/migrations",
    migrationsTable: "migrations",
  })
  logger.info("Database migrated")
}

main()
  .then(() => {
    logger.info("Database migrated successfully")
  })
  .catch((err) => {
    logger.error("Error migrating database", err)
  })
  .finally(() => {
    logger.info("Closing database connection")
    databaseConnection.disconnect()
  })
