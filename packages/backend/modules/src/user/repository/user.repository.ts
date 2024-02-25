import { Inject } from "@nestjs/common"
import { User } from "../domain/user.entity"
import { UserMapper } from "../mapper/user.mapper"
import { logger } from "@backend/libs"
import { BaseRepository } from "@backend/database"

export class UserRepository extends BaseRepository<User> {
  public readonly table = "users"

  @Inject()
  public declare readonly mapper: UserMapper

  public onCreateCallback(entity: User): Promise<void> {
    logger.info("In create callback with", entity)
    return Promise.resolve()
  }

  public onDeleteCallback(entity: User): Promise<void> {
    logger.info("In delete callback with", entity)
    return Promise.resolve()
  }
}
