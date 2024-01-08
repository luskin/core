import * as dotenv from 'dotenv';
dotenv.config({
  path: '.env',
});

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Config } from '@core/libs';
import { UserInterceptor } from './interceptors/user.interceptor';
import { UserService } from '@core/modules';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Inject user into request
  app.useGlobalInterceptors(new UserInterceptor(app.get(UserService)));

  await app.listen(Config.port);

  console.log(
    `Application is running on: http://localhost:${process.env.PORT}`,
  );
}
bootstrap();
