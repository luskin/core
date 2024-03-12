import { Button } from '@/ui/components/button';
import { Heading } from '@/ui/components/typography';
import PageView from '@/ui/layout/view/page-view';
import Link from 'next/link';

export default async function ReviewPage() {
  return (
    <PageView className="bg-slate-2">
      <Heading size={'lg'}>This is a review page</Heading>
      <Link href={'/'}>
        <Button variant={'secondary'} size={'lg'} className="mt-4">
          Go home
        </Button>
      </Link>
    </PageView>
  );
}
