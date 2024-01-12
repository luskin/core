import { param } from 'drizzle-orm';

class LoggerStatic {
  public log(message: string, ...params: Array<unknown>) {
    console.log(message, ...params);
  }

  public error(message: string, ...params: Array<unknown>) {
    console.error(message, ...params);
  }

  public warn(message: string, ...params: Array<unknown>) {
    console.warn(message, ...params);
  }

  public info(message: string, ...params: Array<unknown>) {
    console.log(message, ...params);
  }
}

export const logger = new LoggerStatic();

export default logger;
