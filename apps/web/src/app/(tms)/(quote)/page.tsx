import { Heading, Paragraph } from '@/ui/components/typography';
import { getSession } from '@/lib/auth/auth.session';
import PageView from '@/ui/layout/view/page-view';
import QuoteDetailsWrapper from './quote-details-wrapper';
import { ToggleMenuBar } from './toggle-menu-bar';

export default async function QuotePage() {
  const session = await getSession();
  return (
    <PageView>
      <Heading size="xl">Quote and compare rates instantly</Heading>
      <Paragraph size="lg" className="mt-4" variant={'secondary'}>
        Compare rates from top carriers all in one place
      </Paragraph>
      <QuoteDetailsWrapper className="mt-8" />
      <ToggleMenuBar />
    </PageView>
  );
}
