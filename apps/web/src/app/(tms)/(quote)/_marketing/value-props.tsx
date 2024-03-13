import { cn } from '@/lib/tailwind/utils';
import { ValueProp } from '@/ui/compounds/marketing/value-prop';
import { ClassNameValue } from 'tailwind-merge';

export function QuoteValueProps(props: { className?: string }) {
  const { className } = props;
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4', className)}>
      <ValueProp
        title="Compare the top carriers"
        description="Ornare aliquet pulvinar arcu scelerisque dignissim urna"
        icon="alienShip"
      />
      <ValueProp
        title="Book in 30 seconds"
        description="Ornare aliquet pulvinar arcu scelerisque dignissim urna"
        icon="alienShip"
      />
      <ValueProp
        title="Track all your shipments"
        description="Ornare aliquet pulvinar arcu scelerisque dignissim urna"
        icon="alienShip"
      />
      <ValueProp
        title="Automate your shipping"
        description="Ornare aliquet pulvinar arcu scelerisque dignissim urna"
        icon="alienShip"
      />
    </div>
  );
}
