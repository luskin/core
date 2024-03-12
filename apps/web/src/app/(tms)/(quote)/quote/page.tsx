'use client';

import { useMenubar } from '@/ui/containers/menubar/menubar.provider';
import { Button } from '@/ui/components/button';
import { Heading } from '@/ui/components/typography';
import PageView from '@/ui/layout/view/page-view';
import Link from 'next/link';
import { useEffect } from 'react';
import { QuoteAppBarContent } from './quote-app-bar-content';
import { useAppbar } from '@/app/_appbar/_hooks/useAppbar';

export default function QuotePage() {
  const { collapse } = useMenubar();
  const { setContent, setBackgroundSolid } = useAppbar((state) => ({
    setContent: state.setContent,
    setBackgroundSolid: state.setBackgroundSolid,
  }));
  useEffect(() => {
    collapse();
    setContent(<QuoteAppBarContent />);
    setBackgroundSolid(true);

    return () => {
      setContent(null);
    };
  }, []);
  return (
    <PageView className="bg-slate-2">
      <Heading size={'lg'}>This is a quote page</Heading>
      <Link href="/quote/MS3848282">
        <Button variant={'secondary'} size={'lg'} className="mt-4">
          Simulate review
        </Button>
      </Link>
    </PageView>
  );
}
