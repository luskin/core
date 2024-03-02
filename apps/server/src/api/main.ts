import { MshpNestFactory } from '@mothership/nest';
import { MainModule } from './main.module';
import { MainApiDocs } from './main.docs';
import { logger } from '@libs/logger';
import { config } from '@config';

async function bootstrap() {
  logger.info('Starting the application');

  const app = await MshpNestFactory.create(MainModule, {
    logger: false,
    openApiDocs: [MainApiDocs],
  });

  // Start the application
  await app.listen(5000);
}

bootstrap()
  .then(() => {
    logger.info(`[api] Application started on port ${config.environment.port}`);
    if (config.environment.isDevelopment) {
      logger.info(`[api] OpenAPI documentation is available at http://localhost:${config.environment.port}/api`);
    }
  })
  .catch((error) => {});
