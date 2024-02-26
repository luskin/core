import {
  ConflictException,
  Entity,
  InternalServerErrorException,
  NotFoundException,
} from "@mothership/nest"
import { database } from "./database"
import * as schema from "./schema"
import { eq } from "drizzle-orm"
import { stringUtils } from "@shared/utils"

type TableName = keyof typeof database.query

// Define a type for the mapper
type Mapper<E, T extends TableName> = {
  toDomain: (dbRecord: (typeof schema)[T]["$inferSelect"]) => E
}

export abstract class BaseRepository<E extends Entity> {
  public abstract readonly table: TableName

  public abstract readonly mapper: Mapper<E, typeof this.table>

  public async getById(id: string): Promise<E> {
    const dbResult = await database.query[this.table].findFirst({
      where: (row: any) => eq(row.id, id),
    })

    if (!dbResult) {
      throw new NotFoundException(`${this.table.toUpperCase()} not found`)
    }

    return this.mapper.toDomain(dbResult)
  }

  async create(
    data: (typeof schema)[typeof this.table]["$inferInsert"]
  ): Promise<E> {
    const [dbRecord] = await database
      .insert(schema[this.table])
      .values(data)
      .returning()
    if (!dbRecord) {
      throw new InternalServerErrorException(
        `Unexpectedly failed to create record in ${this.table} table`
      )
    }
    const entity = this.mapper.toDomain(dbRecord)
    await this.onCreateCallback?.(entity)
    return entity
  }

  async updateById(
    id: string,
    data: Partial<(typeof schema)[typeof this.table]["$inferSelect"]>
  ): Promise<E> {
    const beforeUpdateEntity = await this.getById(id)
    const [updatedDbRecord] = await database
      .update(schema[this.table])
      .set(data)
      .where(eq(schema[this.table].id, id))
      .returning()
    if (!updatedDbRecord) {
      throw new InternalServerErrorException(
        `Unexpectedly failed to update record in ${this.table} table`
      )
    }
    const afterUpdateEntity = this.mapper.toDomain(updatedDbRecord)
    await this.onUpdateCallback?.(beforeUpdateEntity, afterUpdateEntity)
    return afterUpdateEntity
  }

  async delete(id: string, hard?: boolean): Promise<E> {
    const dbRecord = await this.getById(id)
    if (dbRecord.deletedAt && !hard) {
      throw new ConflictException(
        `${stringUtils.capitalizeFirstLetter(this.table)} already deleted`
      )
    }
    if (hard) {
      await database
        .delete(schema[this.table])
        .where(eq(schema[this.table].id, id))
    } else {
      await database
        .update(schema[this.table])
        .set({
          deletedAt: new Date(),
        })
        .where(eq(schema[this.table].id, id))
    }
    await this.onDeleteCallback?.(dbRecord)
    return dbRecord
  }

  public onCreateCallback?(entity: E): Promise<void>

  public onUpdateCallback?(
    beforeUpdateEntity: E,
    afterUpdateEntity: E
  ): Promise<void>

  public onDeleteCallback?(entity: E): Promise<void>
}
