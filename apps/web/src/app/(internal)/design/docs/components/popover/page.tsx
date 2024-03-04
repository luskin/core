import { DesignComponentHeader } from '../component-header';
import { Column } from '@/ui/layout/flex';
import { ComponentPropsGrid } from '../component-props-grid';
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/components/popover';
import { Button } from '@/ui/components/button';
import { Label, Paragraph } from '@/ui/components/typography';

export default function PopoverPage() {
  return (
    <>
      <DesignComponentHeader
        title="Popover"
        description="The popover component is used to display additional information or actions in a small, non-modal window. It is often used to display additional information or actions when a user hovers over or clicks on an element. The popover component is a great way to present additional information or actions to users in a way that is easy to understand and use."
      />

      <Column gap={4} className="mt-8">
        <Popover>
          <PopoverTrigger>
            <Button variant={'ghost'}>Click me</Button>
            <PopoverContent align="start">
              <Column gap={4}>
                <Label size="lg">Popover content</Label>
                <Paragraph>This can be anything you wish</Paragraph>
                <Paragraph variant={'secondary'}>Click anywhere to hide this popover</Paragraph>
              </Column>
            </PopoverContent>
          </PopoverTrigger>
        </Popover>
        <ComponentPropsGrid
          label="PopoverContent Props"
          params={[
            {
              name: 'align',
              type: 'string',
              optional: true,
              description: 'The alignment of the popover content, defaults to center. Options are center, start, end',
            },
          ]}
        />
      </Column>
    </>
  );
}
