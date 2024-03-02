import { Quote, QuoteService } from '@modules/quote';
import { api } from '@mothership/nest';
import { Controller, Inject, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('v1/quote')
@ApiTags('quote')
export class QuoteController {
  @Inject()
  private readonly quoteService: QuoteService;

  @api.Post('/', {
    description: 'Create a quote',
    operationId: 'create',
    responseType: Quote,
  })
  public async create(): Promise<Quote> {
    return await this.quoteService.create();
  }

  @api.Post('/:id/purchase', {
    description: 'Purchase a quote',
    operationId: 'purchase',
    responseType: String,
  })
  public async purchase(@Param('id') id: string): Promise<string> {
    return await this.quoteService.purchase(id);
  }
}
