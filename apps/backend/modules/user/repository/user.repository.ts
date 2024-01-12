import { Inject, Injectable } from '@nestjs/common';
import { User } from '../domain/user.entity';
import { DbUserCreate } from './user.repository.types';
import { UserMapper } from '../mapper/user.mapper';
import db from '@libs/database';
import { users } from '@libs/database/schema';
import { NotFoundException } from '@mothership/nest';
import { BaseRepository } from '@libs/database/base.repository';

export class UserRepository extends BaseRepository<User> {
  public readonly table = 'users';

  @Inject()
  public readonly mapper: UserMapper;
}
