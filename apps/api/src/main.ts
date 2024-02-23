import { MshpNestFactory } from '@mothership/nest';
import { MainModule } from './main.module';
import { MainApiDocs } from './main.docs';

async function bootstrap() {
  const app = await MshpNestFactory.create(MainModule, {
    logger: false,
    openApiDocs: [MainApiDocs],
  });

  // Start the application
  await app.listen(5000);

  // Log the application
  console.log(`Application is running on: http://localhost:${5000}`);
}
bootstrap();
