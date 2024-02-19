import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

import { AppModule } from './app.module';
import config from '@config';
import { UserInterceptor } from './interceptors/user.interceptor';
import { UserService } from '@modules/user';
import { connection } from '@libs/database/database';
import { MshpNestFactory } from '@mothership/nest';
import logger from '@libs/logger';

async function bootstrap() {
  try {
    const app = await MshpNestFactory.create(AppModule, {
      logger: false,
    });

    // Inject user into request
    app.useGlobalInterceptors(new UserInterceptor(app.get(UserService)));

    // Connect to database
    await connection.connect();

    await app.listen(config.environment.port);

    logger.info(
      `Application is running on: http://localhost:${process.env.PORT}`,
    );
  } catch (error) {
    console.error('FAILED HERE', error);
  }
}
bootstrap()
  .then(() => {
    logger.info('[API] Started successfully');
  })
  .catch((error) => {
    logger.error('[API] Failed to start', error);
  });
