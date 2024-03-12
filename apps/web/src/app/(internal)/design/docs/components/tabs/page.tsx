'use client';
import { Column } from '@/ui/layout/flex';
import { DesignComponentHeader } from '../component-header';
import { ComponentPropsGrid } from '../component-props-grid';
import { Tabs } from '@/ui/components/tabs';
import { useState } from 'react';
import PageView from '@/ui/layout/view/page-view';

export default function Page() {
  const [value, setValue] = useState('tab1');
  return (
    <PageView>
      <DesignComponentHeader
        title="Tabs"
        description={
          'Toggle between different views or sections of content. Tabs are used to organize content into different sections.'
        }
      />
      <Column gap={4} className={'mt-4'}>
        <Tabs
          value={value}
          onValueChange={setValue}
          tabs={[
            {
              label: 'Tab 1',
              value: 'tab1',
            },
            {
              label: 'Tab 2',
              value: 'tab2',
            },
          ]}
        />
        <ComponentPropsGrid
          params={[
            {
              name: 'value',
              type: ['string'],
              optional: true,
              description: 'The current selected value of the tab.',
            },
            {
              name: 'onValueChange',
              type: 'function',
              optional: true,
              description: 'Callback to the new value of the tab.',
            },
          ]}
          noClassName
        />
      </Column>
    </PageView>
  );
}
