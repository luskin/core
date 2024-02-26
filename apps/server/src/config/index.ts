import * as dotenv from 'dotenv';

// TODO - Improve this to use `.env.local` for local development throug turborepo
dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

import { ConfigEnvironment } from './environment';
import { ConfigFirebase } from './firebase';
import { ConfigDatabase } from './database';

class BackendConfigStatic {
  public readonly environment = new ConfigEnvironment();
  public readonly firebase = new ConfigFirebase();
  public readonly database = new ConfigDatabase();
}

export const config = new BackendConfigStatic();
