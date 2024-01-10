import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from '@config';
import { UserInterceptor } from './interceptors/user.interceptor';
import { UserService } from '@modules/user';
import database from '@libs/database';
import { connection } from '@libs/database/database';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Inject user into request
  app.useGlobalInterceptors(new UserInterceptor(app.get(UserService)));

  // Connect to database
  await connection.connect();

  await app.listen(config.environment.port);

  console.log(
    `Application is running on: http://localhost:${process.env.PORT}`,
  );
}
bootstrap();
