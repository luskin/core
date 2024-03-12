import { Button } from '@/ui/components/button';
import { Heading } from '@/ui/components/typography';
import PageView from '@/ui/layout/view/page-view';
import Link from 'next/link';

export default async function ReviewPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <PageView className="bg-slate-2">
      <Heading size={'lg'}>Quote {id}</Heading>
      <Link href={`/quote/${id}/review`}>
        <Button variant={'secondary'} size={'lg'} className="mt-4">
          Go to review page
        </Button>
      </Link>
    </PageView>
  );
}
