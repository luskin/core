import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
// import { AuthMiddleware } from '@backend/middleware';
import { unauthenticatedRoutes } from './unauthenticated-routes';
import { controllers } from './controllers';
@Module({
  imports: [],
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
