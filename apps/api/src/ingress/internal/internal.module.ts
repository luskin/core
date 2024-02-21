import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { InternalApiV1UserModule } from './v1/user/user.module';
import { AuthMiddleware } from '../../middleware/auth.middleware';
import { unauthenticatedRoutes } from './unauthenticated-routes';
import { InternalApiV1QuoteModule } from './v1/quote/quote.module';

@Module({
  imports: [InternalApiV1UserModule, InternalApiV1QuoteModule],
})
export class InternalModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(...unauthenticatedRoutes)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
