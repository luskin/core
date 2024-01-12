import { ConflictException, Entity, NotFoundException } from '@mothership/nest';
import { PgTableWithColumns } from 'drizzle-orm/pg-core';
import { database } from './database';
import logger from '@libs/logger';
import * as schema from './schema';
import { eq } from 'drizzle-orm';
import { stringUtils } from '@core/utils';

type TableName = keyof typeof database.query;

// Define a type for the mapper
type Mapper<E, T extends TableName> = {
  toDomain: (dbRecord: (typeof schema)[T]['$inferSelect']) => E;
};

export abstract class BaseRepository<E extends Entity> {
  public abstract readonly table: TableName;

  public abstract readonly mapper: Mapper<E, typeof this.table>;

  public async getById(id: string): Promise<E> {
    const dbResult = await database.query[this.table].findFirst({
      where: (row: any) => eq(row.id, id),
    });

    if (!dbResult) {
      throw new NotFoundException(`${this.table.toUpperCase()} not found`);
    }

    return this.mapper.toDomain(dbResult);
  }

  async create(
    data: (typeof schema)[typeof this.table]['$inferInsert'],
  ): Promise<E> {
    const [dbUser] = await database
      .insert(schema[this.table])
      .values(data)
      .returning();
    return this.mapper.toDomain(dbUser);
  }

  async delete(id: string, hard?: boolean): Promise<E> {
    const dbUser = await this.getById(id);
    logger.info(`Deleting ${this.table} ${id}`, { dbUser });
    if (dbUser.deletedAt && !hard) {
      throw new ConflictException(
        `${stringUtils.capitalizeFirstLetter(this.table)} already deleted`,
      );
    }
    if (hard) {
      await database
        .delete(schema[this.table])
        .where(eq(schema[this.table].id, id));
    } else {
      await database
        .update(schema[this.table])
        .set({
          deletedAt: new Date(),
        })
        .where(eq(schema[this.table].id, id));
    }
    return dbUser;
  }
}
