import { Module } from '@nestjs/common';
import { PurchaseModule } from '@shared';

@Module({
  imports: [PurchaseModule],
})
export class QuoteModule {}
