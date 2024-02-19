import { QuoteService } from '@modules/quote/quote.service';
import { api } from '@mothership/nest';
import { Controller, Inject, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('v1/quote')
@ApiTags('quote')
export class InternalApiV1QuoteController {
  @Inject()
  private readonly quoteService: QuoteService;

  @api.Post('/:id', {
    description: 'Purchase a quote',
    operationId: 'purchase',
    responseType: undefined,
  })
  async purchase(@Param('id') id: string): Promise<void> {
    return await this.quoteService.purchase(id);
  }
}
