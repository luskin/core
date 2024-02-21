import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config, logger, databaseConnection, UserService } from '@core/backend';
import { UserInterceptor } from './interceptors/user.interceptor';
import { MshpNestFactory } from '@mothership/nest';
import { InternalApiDocs } from './ingress/internal/internal.api.docs';

async function bootstrap() {
  console.log('One');

  const app = await NestFactory.create(AppModule, {
    logger: false,
  });

  console.log('Two');

  console.log('What is: ', UserService);

  // Inject user into request
  // app.useGlobalInterceptors(new UserInterceptor(app.get(UserService)));

  console.log('Here?');
  // Connect to database
  await databaseConnection.connect();

  await app.listen(config.environment.port);

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
