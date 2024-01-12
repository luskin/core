import { Inject } from '@nestjs/common';
import { User } from '../domain/user.entity';
import { UserMapper } from '../mapper/user.mapper';
import { BaseRepository } from '@libs/database/base.repository';
import logger from '@libs/logger';

export class UserRepository extends BaseRepository<User> {
  public readonly table = 'users';

  @Inject()
  public readonly mapper: UserMapper;

  public onCreateCallback(entity: User): Promise<void> {
    logger.info('In create callback with', entity);
    return Promise.resolve();
  }

  public onDeleteCallback(entity: User): Promise<void> {
    logger.info('In delete callback with', entity);
    return Promise.resolve();
  }
}
