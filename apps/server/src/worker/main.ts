import { logger } from '@libs/logger';

async function bootstrap() {
  logger.info('Starting the working');
}

bootstrap()
  .then(() => {
    logger.info(`[worker] Application started successfully`);
  })
  .catch((error) => {
    logger.error(`[worker] Application failed to start: ${error}`);
  });
