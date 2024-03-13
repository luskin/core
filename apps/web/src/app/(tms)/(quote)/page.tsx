'use client';
import { Heading, Paragraph } from '@/ui/components/typography';
import PageView from '@/ui/layout/view/page-view';
import QuoteDetailsWrapper from './quote-details-wrapper';
import { ToggleMenuBar } from './toggle-menu-bar';
import { useMenubar } from '@/ui/containers/menubar/menubar.provider';
import { useEffect } from 'react';
import { useAppbar } from '@/app/_appbar/_hooks/useAppbar';
import { useSession } from '@/app/(auth)/_hooks';
import { QuoteValueProps } from './_marketing/value-props';

export default function QuotePage() {
  const menubar = useMenubar();
  const session = useSession();
  const setBackgroundSolid = useAppbar((state) => state.setBackgroundSolid);

  useEffect(() => {
    menubar.expand();
    setBackgroundSolid(false);
  }, []);

  return (
    <PageView>
      <Heading size="xl">Quote and compare rates instantly</Heading>
      <Paragraph size="lg" className="mt-4" variant={'secondary'}>
        Compare rates from top carriers all in one place
      </Paragraph>
      <QuoteDetailsWrapper className="mt-8" />
      <Heading size={'md'} className="mt-20">
        Reliable freight shipping powered by technology
      </Heading>
      <QuoteValueProps className="mt-10" />
      <ToggleMenuBar />
      {session && <div className="mt-4">Since you are logged in, you can see this part of the page.</div>}
    </PageView>
  );
}
