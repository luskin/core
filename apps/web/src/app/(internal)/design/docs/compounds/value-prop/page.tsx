import { Column } from '@/ui/layout/flex';
import { Skeleton } from '@/ui/components/skeleton';
import { Paragraph } from '@/ui/components/typography';
import PageView from '@/ui/layout/view/page-view';
import { DesignComponentHeader } from '../../components/component-header';
import { ComponentPropsGrid } from '../../components/component-props-grid';
import { ValueProp } from '@/ui/compounds/marketing/value-prop';

export default function ValuePropPage() {
  return (
    <PageView>
      <DesignComponentHeader
        title="Value Prop"
        description="The value prop component is used to display a title, description, and an optional icon. It is often used to display a feature or benefit of a product or service."
      />

      <ValueProp
        title="Value prop title"
        description="Value prop description. Why this value is important to the customer."
        icon="alienShip"
        className="mt-4"
      />

      <Column gap={4} className="mt-8">
        <ComponentPropsGrid
          params={[
            {
              name: 'title',
              type: 'string',
              description: 'The title for the value prop.',
            },
            {
              name: 'description',
              type: 'string',
              description: 'The description for the value prop.',
            },
            {
              name: 'icon',
              type: 'string',
              description: 'The icon name for the value prop.',
            },
          ]}
        />
      </Column>
    </PageView>
  );
}
