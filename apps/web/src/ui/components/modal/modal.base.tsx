'use client';

import * as React from 'react';
import { Root, DialogProps } from '@radix-ui/react-dialog';

import { cn } from '@/lib/tailwind/utils';
import { ModalClose, ModalContent, ModalTrigger } from './modal.parts';
import { Column, Row } from '@/ui/layout/flex';
import { Icon, IconName } from '../icon';
import { Heading } from '../typography';
import { Button, ButtonProps, XButton } from '../button';

type ModalBaseProps = DialogProps & {
  title?: string | React.ReactNode;
  iconName?: IconName;
  iconClassName?: string;
  closeButtonLabel?: string;
  onClose?: () => void;
  trigger?: React.ReactNode;
  disableCloseOnClickOutside?: boolean;
  noCloseButton?: boolean;
  actionButtons?: Array<
    Pick<ButtonProps, 'variant' | 'onClick'> & {
      label: string;
    }
  >;
};

const ModalBase = ({
  children,
  iconName,
  iconClassName,
  title,
  trigger,
  actionButtons,
  disableCloseOnClickOutside,
  closeButtonLabel = 'Close',
  onClose,
  noCloseButton,
  ...props
}: ModalBaseProps) => {
  const onInteractOutside = (event: Event) => {
    if (disableCloseOnClickOutside) {
      event.preventDefault();
    }
  };

  return (
    <Root {...props}>
      {trigger && <ModalTrigger asChild>{trigger}</ModalTrigger>}
      <ModalContent onInteractOutside={onInteractOutside} className="rounded-2xl border-none shadow">
        <Column className={'p-4'}>
          <Row gap={6} className={'w-full'} align="center">
            {iconName && (
              <div className={cn(iconClassName, 'flex h-10 w-10 items-center justify-center rounded-lg')}>
                <Icon name={iconName} className="h-4" />
              </div>
            )}
            <div className="flex-1">
              <Heading size={'md'} className="max-w-[310px]">
                {title}
              </Heading>
            </div>
            <div className="flex h-full items-start justify-end">
              <ModalClose asChild>
                <XButton align="top-right" />
              </ModalClose>
            </div>
          </Row>
          <div className="w-full flex-1 py-4">{children}</div>
          <Row gap={2} className={'w-full'} justify="end">
            {!noCloseButton && (
              <ModalClose asChild>
                <Button size="md" variant="ghost" onClick={onClose}>
                  {closeButtonLabel}
                </Button>
              </ModalClose>
            )}
            {actionButtons?.map(({ label, ...buttonProps }, index) => (
              <Button key={`${label}_${index}`} {...buttonProps}>
                {label}
              </Button>
            ))}
          </Row>
        </Column>
      </ModalContent>
    </Root>
  );
};

export { ModalBase };
export type { ModalBaseProps };
