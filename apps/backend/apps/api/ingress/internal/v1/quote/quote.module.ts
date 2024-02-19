import { Module } from '@nestjs/common';
import { InternalApiV1QuoteController } from './quote.controller';
import { QuoteModule } from '@modules/quote/quote.module';

@Module({
  imports: [QuoteModule],
  controllers: [InternalApiV1QuoteController],
})
export class InternalApiV1QuoteModule {}
