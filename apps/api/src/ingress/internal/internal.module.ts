import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { InternalApiV1UserModule } from './v1/user/user.module';
import { AuthMiddleware } from 'src/middleware/auth.middleware';

@Module({
  imports: [InternalApiV1UserModule],
})
export class InternalModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
