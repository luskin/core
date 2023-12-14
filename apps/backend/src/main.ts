import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

dotenv.config({
  path: '.env',
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.PORT as string);

  console.log(
    `Application is running on: http://localhost:${process.env.PORT}`,
  );
}
bootstrap();
