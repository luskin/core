'use client';
import * as Icons from '@/ui/components/icon/svgs';
import { DesignComponentHeader } from '../component-header';
import { IconName } from '@/ui/components/icon';
import { Column } from '@/ui/layout/flex';
import { Label, Paragraph } from '@/ui/components/typography';
import { ComponentPropsGrid } from '../component-props-grid';
import { Button } from '@/ui/components/button';
import { copyToClipboard } from '@/lib/clipboard/copyToClipboard';
import PageView from '@/ui/layout/view/page-view';

export default function IconPage() {
  return (
    <PageView>
      <DesignComponentHeader
        title="Icons"
        description="Explore our comprehensive library of icons. This collection provides a wide range of symbols to help you create intuitive and visually pleasing interfaces. Each icon is designed with simplicity and consistency in mind, ensuring they blend seamlessly with your design."
      />
      <Label className="p-4">Click an icon to copy the react code to clipboard</Label>
      <div className="container mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Object.keys(Icons).map((iconName) => {
          return (
            <Column align="center" key={iconName}>
              <Button
                icon={iconName as IconName}
                size="lg"
                variant={'ghost'}
                onClick={() => copyToClipboard(`<Icon name={'${iconName}'} />`)}
              />
              <Paragraph size="sm" className="mt-2 text-center">
                {iconName}
              </Paragraph>
            </Column>
          );
        })}
      </div>
      <ComponentPropsGrid
        label="Params"
        params={[
          {
            name: 'name',
            type: 'string',
            description: 'The name of the icon to display',
          },
        ]}
      />
    </PageView>
  );
}
