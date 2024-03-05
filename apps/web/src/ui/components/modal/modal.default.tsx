'use client';

import * as React from 'react';
import { cn } from '@/lib/tailwind/utils';
import { ModalClose } from './modal.parts';
import { Column, Row } from '@/ui/layout/flex';
import { Icon, IconName } from '../icon';
import { Heading } from '../typography';
import { Button, ButtonProps, XButton } from '../button';
import { ModalBase, ModalBaseProps } from './modal.base';

type ModalDefaultProps = ModalBaseProps & {
  title?: string | React.ReactNode;
  iconName?: IconName;
  iconClassName?: string;
  closeButtonLabel?: string;
  noCloseButton?: boolean;
  actionButtons?: Array<
    Pick<ButtonProps, 'variant' | 'onClick'> & {
      label: string;
    }
  >;
};

const ModalDefault = ({
  children,
  iconName,
  iconClassName,
  title,
  actionButtons,
  closeButtonLabel = 'Close',
  onClose,
  noCloseButton,
  ...props
}: ModalDefaultProps) => {
  return (
    <ModalBase {...props} onClose={onClose} contentClassName={cn('p-6', props.contentClassName)}>
      <Column>
        <Row gap={6} className={'w-full'} align="center">
          {iconName && (
            <div className={cn(iconClassName, 'flex h-10 w-10 items-center justify-center rounded-lg')}>
              <Icon name={iconName} className="h-4" />
            </div>
          )}
          <div className="flex-1">
            <Heading size={'md'} className="max-w-[310px]">
              {title && title}
            </Heading>
          </div>
        </Row>
        <div className="w-full flex-1 py-4">{children}</div>
        <Row gap={4} className={'w-full'} justify="end">
          {!noCloseButton && (
            <ModalClose asChild>
              <Button size="lg" variant="ghost" onClick={onClose}>
                {closeButtonLabel}
              </Button>
            </ModalClose>
          )}
          {actionButtons?.map(({ label, ...buttonProps }, index) => (
            <Button key={`${label}_${index}`} size={'lg'} {...buttonProps}>
              {label}
            </Button>
          ))}
        </Row>
      </Column>
    </ModalBase>
  );
};

export { ModalDefault };
export type { ModalDefaultProps };
