'use client';

import { Button } from '@/ui/components/button';
import { Row } from '@/ui/layout/flex';
import { useState } from 'react';

export function QuoteAppBarContent() {
  const [count, setCount] = useState(0);
  const [temp, setTemp] = useState<string | null>(null);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Row gap={4}>
        Custom Appbar Content: {temp}
        <Button
          onClick={() => {
            const newCount = count + 1;
            setTemp(`Temp: ${newCount}`);
            setCount(newCount);
          }}
        >
          Set temp
        </Button>
      </Row>
    </div>
  );
}
