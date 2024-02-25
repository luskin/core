import { Injectable } from '@nestjs/common';
import { DbUser } from '../repository/user.repository.types';
import { User } from '../domain/user.entity';

@Injectable()
export class UserMapper {
  toDomain(dbModel: DbUser): User {
    return {
      id: dbModel.id,
      createdAt: dbModel.createdAt,
      updatedAt: dbModel.updatedAt,
      deletedAt: dbModel.deletedAt,
      firstName: dbModel.firstName,
      lastName: dbModel.lastName,
      email: dbModel.email,
      firebaseAuthId: dbModel.firebaseAuthId,
    };
  }
}
