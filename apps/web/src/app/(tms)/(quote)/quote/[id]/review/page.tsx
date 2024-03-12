import { Button } from '@/ui/components/button';
import { Heading } from '@/ui/components/typography';
import PageView from '@/ui/layout/view/page-view';
import Link from 'next/link';

export type QuoteReviewPageProps = {
  params: {
    id: string;
  };
};

export default async function ReviewPage(props: QuoteReviewPageProps) {
  const { id } = props.params;
  return (
    <PageView className="bg-slate-2">
      <Heading size={'lg'}>Quote Review: {id}</Heading>
      <Link href={'/'}>
        <Button variant={'secondary'} size={'lg'} className="mt-4">
          Go home
        </Button>
      </Link>
    </PageView>
  );
}
