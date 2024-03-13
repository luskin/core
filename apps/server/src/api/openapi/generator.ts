import 'dotenv/config';
import { MshpDocumentBuilder, MshpNestFactory } from '@mothership/nest';
import { writeFileSync } from 'fs';
import { logger } from '@libs/logger';
import { MainModule } from '../main.module';
import { MainApiDocs } from '../main.docs';

async function generate(): Promise<void> {
  const app = await MshpNestFactory.create(MainModule, {
    logger: false,
  });
  const document = MshpDocumentBuilder.create(app, MainApiDocs);
  writeFileSync('./src/api/openapi/spec.internal.json', JSON.stringify(document));
}

generate()
  .then(() => {
    logger.log('[api] OpenAPI Spec Generated');
    process.exit(0);
  })
  .catch((error: unknown) => {
    logger.error('[api] OpenAPI Spec Generation Failed', { error });
  });
