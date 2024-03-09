'use client';

import { useMenubar } from '@/app/_providers/menubar.provider';
import { Button } from '@/ui/components/button';
import { Heading, Label } from '@/ui/components/typography';
import PageView from '@/ui/layout/view/page-view';
import Link from 'next/link';
import { useEffect } from 'react';

export default function QuotePage() {
  const { collapse } = useMenubar();
  useEffect(collapse, []);
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
