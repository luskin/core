import { Module } from '@nestjs/common';
import { InternalApiV1UserModule } from './v1/user/user.module';

@Module({
  imports: [InternalApiV1UserModule],
})
export class InternalModule {}
