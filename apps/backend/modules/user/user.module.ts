import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './repository/user.repository';
import { UserMapper } from './mapper/user.mapper';

@Module({
  providers: [UserService, UserRepository, UserMapper],
  exports: [UserService, UserRepository],
})
export class UserModule {}
