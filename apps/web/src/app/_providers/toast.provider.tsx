import { Toaster } from '@/ui/components/toaster';
import { PropsWithChildren } from 'react';

export default function ToastProvider({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
