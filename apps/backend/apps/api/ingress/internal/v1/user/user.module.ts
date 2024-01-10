import { Module } from '@nestjs/common';
import { InternalApiV1UserController } from './user.controller';
import { UserModule } from '@modules/user';

@Module({
  imports: [UserModule],
  controllers: [InternalApiV1UserController],
})
export class InternalApiV1UserModule {}
