import { Heading } from '@/ui/components/typography';
import PageView from '@/ui/layout/view/page-view';

export default async function ReviewPage() {
  const random = Math.random();
  const test = await new Promise<number>((r) =>
    setTimeout(() => {
      r(random);
    }, 2000)
  );
  return (
    <PageView className="bg-slate-2">
      <Heading size={'lg'}>This is a review page: {test}</Heading>
    </PageView>
  );
}
