import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config, logger, databaseConnection } from '@core/backend';
import { UserService } from '@core/modules';
import { UserInterceptor } from './interceptors/user.interceptor';
import { MshpNestFactory } from '@mothership/nest';
import { InternalApiDocs } from './ingress/internal/internal.api.docs';

async function bootstrap() {
  console.log('One');

  // const app = await NestFactory.create(AppModule, {
  //   logger: false,
  // });

  const userService = new UserService();
  const user = userService.getUser();
  logger.info('User:', user);

  // Inject user into request
  // app.useGlobalInterceptors(new UserInterceptor(app.get(UserService)));

  // Connect to database
  // await databaseConnection.connect();

  // await app.listen(config.environment.port);

  logger.info(
    `Application is running on: http://localhost:${process.env.PORT}`,
  );
}
bootstrap()
  .then(() => {
    logger.info('[API] Started successfully');
  })
  .catch((error) => {
    logger.error('[API] Failed to start', error);
  });
