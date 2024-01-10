import { Inject, Injectable } from '@nestjs/common';
import { User } from '../domain/user.entity';
import { DbUserCreate } from './user.repository.types';
import { UserMapper } from '../mapper/user.mapper';
import db from '@libs/database';
import logger from '@libs/logger';
import { users } from '@libs/database/schema';

@Injectable()
export class UserRepository {
  @Inject()
  private readonly mapper: UserMapper;

  async getById(id: string): Promise<User> {
    logger.info('Getting user by id', { id });
    const dbUser = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, id),
    });

    if (!dbUser) {
      logger.info('User not found', { id });
      throw new Error('User not found');
    }

    logger.info('Got user by id', { id, dbUser });
    return this.mapper.toDomain(dbUser);
  }

  async create(data: DbUserCreate): Promise<User> {
    const [dbUser] = await db
      .insert(users)
      .values({
        email: data.email,
        firebaseAuthId: data.firebaseAuthId,
        firstName: data.firstName,
        lastName: data.lastName,
        status: data.status,
      })
      .returning();
    return this.mapper.toDomain(dbUser);
  }

  async delete(id: string): Promise<User> {
    return this.getById(id);
  }
}
