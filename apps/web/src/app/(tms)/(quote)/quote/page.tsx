'use client';

import { useMenubar } from '@/ui/layout/menubar.provider';
import { Button } from '@/ui/components/button';
import { Heading, Label } from '@/ui/components/typography';
import PageView from '@/ui/layout/view/page-view';
import Link from 'next/link';
import { useEffect } from 'react';
import { QuoteAppBarContent } from './quote-app-bar-content';
import { useAppbar } from '@/app/_appbar/_hooks/useAppbar';

export default function QuotePage() {
  const { collapse } = useMenubar();
  const setContent = useAppbar((state) => state.setContent);
  useEffect(() => {
    collapse();
    setContent(<QuoteAppBarContent />);

    return () => {
      setContent(null);
    };
  }, []);
  return (
    <PageView>
      <Heading size={'lg'}>This is a quote page</Heading>
      <Link href="/quote/review">
        <Button variant={'secondary'} size={'lg'} className="mt-4">
          Simulate review
        </Button>
      </Link>
    </PageView>
  );
}
