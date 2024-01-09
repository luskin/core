import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { InternalApiV1UserModule } from './v1/user/user.module';
import { AuthMiddleware } from 'src/middleware/auth.middleware';
import { unauthenticatedRoutes } from './unauthenticated-routes';

@Module({
  imports: [InternalApiV1UserModule],
})
export class InternalModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(...unauthenticatedRoutes)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
