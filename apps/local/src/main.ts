import { TestClass } from "@package/basic";

async function bootstrap() {
  const test = new TestClass();
  console.log(test.hello());
}
bootstrap();
