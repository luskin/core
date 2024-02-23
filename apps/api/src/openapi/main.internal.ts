import 'dotenv/config';
import { InternalApiDocs } from '../ingress/internal/internal.api.docs';
import { InternalModule } from '../ingress/internal/internal.module';
import { MshpDocumentBuilder, MshpNestFactory } from '@mothership/nest';
import { writeFileSync } from 'fs';
import { logger } from '@core/backend';

async function generate(): Promise<void> {
  const app = await MshpNestFactory.create(InternalModule, {
    logger: false,
  });
  const document = MshpDocumentBuilder.create(app, InternalApiDocs);
  writeFileSync('./api/openapi/spec.internal.json', JSON.stringify(document));
}

generate()
  .then(() => {
    logger.log('internal-ts OpenAPI Spec Generated');
    process.exit(0);
  })
  .catch((error: unknown) => {
    logger.error('internal-ts OpenAPI Spec Generation Failed', { error });
  });
