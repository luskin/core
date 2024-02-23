import { stringUtils } from '@core/utils';
import { TestClass } from '@package/basic';

async function bootstrap() {
  const test = new TestClass();
  console.log(stringUtils.capitalizeFirstLetter('lower') + ' ' + test.hello());
}
bootstrap();
