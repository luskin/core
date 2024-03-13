import { cn } from '@/lib/tailwind/utils';
import { Icon, IconName } from '@/ui/components/icon';
import { Heading, Paragraph } from '@/ui/components/typography';
import { Column } from '@/ui/layout/flex';

export interface ValuePropProps {
  title: string;
  description: string;
  icon?: IconName;
  className?: string;
}

export function ValueProp(props: ValuePropProps) {
  const { title, description, icon, className } = props;

  return (
    <Column gap={4} className={cn('max-w-[268px]', className)}>
      {icon && <Icon name={icon} className="h-12" />}
      <Heading size={'sm'}>{title}</Heading>
      <Paragraph size={'lg'} variant={'secondary'}>
        {description}
      </Paragraph>
    </Column>
  );
}
