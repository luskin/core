import { Module } from '@nestjs/common';
import { InternalModule } from './internal/internal.module';
import { ExternalModule } from './external/external.module';

@Module({
  imports: [InternalModule, ExternalModule],
})
export class AppModule {}
