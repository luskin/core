'use client';

import { cn } from '@/lib/tailwind/utils';
import { Button } from '@/ui/components/button';
import { Paragraph } from '@/ui/components/typography';
import { Column } from '@/ui/layout/flex';
import Link from 'next/link';

interface QuoteDetailsWrapperProps {
  className?: string;
}

export default function QuoteDetailsWrapper(props: QuoteDetailsWrapperProps) {
  return (
    <Column className={cn('border-accent-9 min-h-52 w-full rounded-2xl border-2 bg-white p-4 shadow', props.className)}>
      <Paragraph variant={'secondary'}>Click the button below to simulate going to quote page</Paragraph>
      <Link href="/quote" className="mt-4">
        <Button>Search</Button>
      </Link>
    </Column>
  );
}
