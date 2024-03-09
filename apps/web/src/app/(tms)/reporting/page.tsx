import { numUtils } from '@shared/utils';

export default async function Reporting() {
  const randomMsNumber = numUtils.random({
    min: 100000,
    max: 999999,
  });
  const result: string = await new Promise((resolve) => setTimeout(() => resolve('MS' + randomMsNumber), 800));
  return <div>Reporting: {result}</div>;
}
