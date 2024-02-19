import logger from '@libs/logger';
import { Injectable } from '@nestjs/common';
import { PurchaseService } from '@shared';

@Injectable()
export class QuoteService {
  public constructor(private readonly purchaseService: PurchaseService) {}

  public async purchase(id: string): Promise<void> {
    logger.info('Purchasing quote', { id });
    await this.purchaseService.create();
  }
}
