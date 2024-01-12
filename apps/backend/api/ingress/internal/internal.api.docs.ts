import { MshpDocumentBuilderOptions } from '@mothership/nest';

export const InternalApiDocs: MshpDocumentBuilderOptions = {
  server: '/',
  version: '0.0.0',
  title: 'Internal APIs',
  docsPath: '/internal/docs',
  description:
    'This is the API documentation for the Internal API ingress. This ingress is responsible for powering all homegrown products on the Mothership platform.',
};
