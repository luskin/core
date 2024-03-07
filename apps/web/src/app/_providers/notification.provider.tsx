import { NotificationToaster } from '@/ui/components/notification';
import { PropsWithChildren } from 'react';

export function NotificationProvider({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <NotificationToaster />
    </>
  );
}
