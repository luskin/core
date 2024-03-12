'use client';
import { DesignComponentHeader } from '../component-header';
import { Column } from '@/ui/layout/flex';
import { useState } from 'react';
import { Switch } from '@/ui/components/switch';
import { Grid } from '@/ui/layout/grid';
import { Label, Paragraph } from '@/ui/components/typography';
import { ComponentPropsGrid } from '../component-props-grid';
import PageView from '@/ui/layout/view/page-view';

export default function SwitchPage() {
  const [value, setValue] = useState<boolean>(false);
  return (
    <PageView>
      <DesignComponentHeader
        title="Switch"
        description="The switch component is used to allow users to toggle between two states. It is often used in forms to allow users to make a single selection from a list of options. The switch component is a great way to present a list of options to users in a way that is easy to understand and use."
      />

      <Column gap={4} className="mt-8">
        <Switch checked={value} onCheckedChange={setValue} />
        <ComponentPropsGrid
          params={[
            {
              name: 'checked',
              type: 'boolean',
              description: 'The current state of the switch.',
            },
            {
              name: 'onCheckedChange',
              type: 'function',
              description: 'Callback when the state of the switch changes',
            },
          ]}
        />
      </Column>
    </PageView>
  );
}
