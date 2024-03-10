'use client';

import { useAppbarStore } from '@/app/_providers/appbar.provider';
import { useMenubar } from '@/app/_providers/menubar.provider';
import { Button } from '@/ui/components/button';
import { Heading, Label } from '@/ui/components/typography';
import PageView from '@/ui/layout/view/page-view';
import Link from 'next/link';
import { useEffect } from 'react';

export default function QuotePage() {
  const { collapse } = useMenubar();
  const setContent = useAppbarStore((state) => state.setContent);
  useEffect(() => {
    collapse();
    setContent(<div className="flex h-full w-full items-center justify-center">Custom stuff</div>);

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
