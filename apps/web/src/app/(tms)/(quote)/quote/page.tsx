'use client';

import { useMenubar } from '@/app/_providers/menubar.provider';
import PageView from '@/ui/layout/view/page-view';
import { useEffect } from 'react';

export default function QuotePage() {
  const { collapse } = useMenubar();
  useEffect(collapse, []);
  return <PageView>This is a quote page</PageView>;
}
