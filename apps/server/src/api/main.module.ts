import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
// import { AuthMiddleware } from '@middleware';
import { unauthenticatedRoutes } from './unauthenticated-routes';
import { controllers } from './controllers';
import { QuoteModule } from '@modules/quote/quote.module';
@Module({
  imports: [QuoteModule],
  controllers,
  providers: [],
})
export class MainModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer
    //   .apply(AuthMiddleware)
    //   .exclude(...unauthenticatedRoutes)
    //   .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
