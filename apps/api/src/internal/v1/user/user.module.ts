import { Module } from '@nestjs/common';
import { InternalApiV1UserController } from './user.controller';

@Module({
  controllers: [InternalApiV1UserController],
})
export class InternalApiV1UserModule {}
