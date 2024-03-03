import { Column, Row } from '@/ui/layout/flex';
import { Heading, Paragraph } from '../typography';
import { Button, ButtonProps, XButton } from '../button';
import { Icon, IconName } from '../icon';
import { MshpTheme } from '../../../../tailwind.config';
import { cn } from '@/lib/tailwind/utils';

interface ToastActionButton extends Pick<ButtonProps, 'variant' | 'className' | 'onClick'> {
  label: string | React.ReactNode;
}

export interface ToastBaseProps {
  title: string;
  description: string;
  descriptionClassName?: string;
  iconName?: IconName;
  iconClassName?: string;
  onClose?: () => void;
  actionButtons?: Array<ToastActionButton>;
}

export function ToastBase({
  title,
  iconName,
  iconClassName,
  description,
  descriptionClassName,
  onClose,
  actionButtons = [],
}: ToastBaseProps) {
  return (
    <Row gap={4} className={'w-full rounded-2xl p-4 shadow-lg'}>
      {iconName && (
        <div className={cn(iconClassName, 'flex h-8 w-8 items-center justify-center rounded-lg')}>
          <Icon name={iconName} className="h-4" />
        </div>
      )}
      <Column className={'flex-1'}>
        <Heading size={'sm'}>{title}</Heading>
        {description && (
          <Paragraph size={'lg'} className={cn('mt-2', descriptionClassName)}>
            {description}
          </Paragraph>
        )}
        <Row gap={2} className={'mt-5'}>
          {actionButtons.map(({ label, ...buttonProps }, index) => (
            <Button key={`${label}_${index}`} {...buttonProps}>
              {label}
            </Button>
          ))}
          <Button size="md" variant="ghost" onClick={onClose}>
            Close
          </Button>
        </Row>
      </Column>
      <XButton onClick={onClose} />
    </Row>
  );
}
