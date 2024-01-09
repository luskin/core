import { Module } from '@nestjs/common';
import { InternalApiV1UserController } from './user.controller';
import { UserModule } from '@core/modules';

@Module({
  imports: [UserModule],
  controllers: [InternalApiV1UserController],
})
export class InternalApiV1UserModule {}
