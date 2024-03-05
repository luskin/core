'use client';

import * as React from 'react';
import { Root, DialogProps } from '@radix-ui/react-dialog';

import { cn } from '@/lib/tailwind/utils';
import { ModalClose, ModalContent, ModalRoot, ModalTrigger } from './modal.parts';
import { XButton } from '../button';

type ModalBaseProps = DialogProps & {
  contentClassName?: string;
  onClose?: () => void;
  trigger?: React.ReactNode;
  disableCloseOnClickOutside?: boolean;
  noCloseXButton?: boolean;
  closeXButtonContainerClassName?: string;
};

const ModalBase = ({
  children,
  contentClassName,
  trigger,
  disableCloseOnClickOutside,
  onClose,
  noCloseXButton,
  closeXButtonContainerClassName,
  ...props
}: ModalBaseProps) => {
  const onInteractOutside = (event: Event) => {
    if (disableCloseOnClickOutside) {
      event.preventDefault();
    }
  };

  return (
    <ModalRoot {...props}>
      {trigger && <ModalTrigger asChild>{trigger}</ModalTrigger>}
      <ModalContent
        onInteractOutside={onInteractOutside}
        className={cn('rounded-2xl border-none bg-white shadow', contentClassName)}
      >
        {children}
        {!noCloseXButton && (
          <div className={cn('absolute right-4 top-4 flex', closeXButtonContainerClassName)}>
            <ModalClose asChild>
              <XButton align="top-right" onClick={onClose} />
            </ModalClose>
          </div>
        )}
      </ModalContent>
    </ModalRoot>
  );
};

export { ModalBase };
export type { ModalBaseProps };
