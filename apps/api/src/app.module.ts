import { Module } from '@nestjs/common';
import { InternalModule } from './ingress/internal/internal.module';
// import { ExternalModule } from './ingress/external/external.module';

@Module({
  imports: [InternalModule],
})
export class AppModule {}
