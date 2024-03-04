'use client';

import * as React from 'react';
import { Root, DialogProps } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { cn } from '@/lib/tailwind/utils';
import { ModalClose, ModalContent, ModalTrigger } from './modal.parts';
import { Column, Row } from '@/ui/layout/flex';
import { Icon, IconName } from '../icon';
import { Heading } from '../typography';
import { Button, ButtonProps, XButton } from '../button';

type ModalProps = DialogProps & {
  title?: string | React.ReactNode;
  iconName?: IconName;
  iconClassName?: string;
  closeButtonLabel?: string;
  onClose?: () => void;
  trigger?: React.ReactNode;
  disableCloseOnClickOutside?: boolean;
  noCloseButton?: boolean;
  actionButtons?: Array<
    Pick<ButtonProps, 'variant'> & {
      label: string;
    }
  >;
};

const Modal = ({
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
}: ModalProps) => {
  const onInteractOutside = (event: Event) => {
    if (disableCloseOnClickOutside) {
      event.preventDefault();
    }
  };

  return (
    <Root {...props}>
      {trigger && <ModalTrigger asChild>{trigger}</ModalTrigger>}
      <ModalContent onInteractOutside={onInteractOutside}>
        <Column className={'p-4'}>
          <Row gap={4} className={'w-full'} align="center">
            {iconName && (
              <div className={cn(iconClassName, 'flex h-8 w-8 items-center justify-center rounded-lg')}>
                <Icon name={iconName} className="h-4" />
              </div>
            )}
            <Heading size={'md'} className="flex-1">
              {title}
            </Heading>
            <ModalClose asChild>
              <XButton align="top-right" />
            </ModalClose>
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

export { Modal };
export type { ModalProps };
