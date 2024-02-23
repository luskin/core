import { MshpDocumentBuilderOptions } from '@mothership/nest';

export const MainApiDocs: MshpDocumentBuilderOptions = {
  server: '/api',
  version: '0.0.0',
  title: 'Internal APIs',
  docsPath: '/api/docs',
  description:
    'This is the API documentation for the Internal API ingress. This ingress is responsible for powering all homegrown products on the Mothership platform.',
};
