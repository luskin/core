'use client';
import { cn } from '@/lib/tailwind/utils';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className={cn(
        'toaster group',
        'data-[sonner-toaster]:data-[x-position=right]:right-8',
        'data-[sonner-toaster]:data-[y-position=top]:top-[env(safe-area-inset-top)]',
        'min-[600px]:!w-[456px]'
      )}
      toastOptions={{
        classNames: {
          toast: 'group toast group-[.toaster]:bg-slate-1 group-[.toaster]:shadow-lg w-full',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
