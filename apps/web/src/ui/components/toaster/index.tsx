'use client';
import { cn } from '@/lib/tailwind/utils';
import { Toaster as Sonner, toast } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;
//sm:group-[.toaster]:w-[456px]
// !data-[sonner-toaster]:w-[456px] !data-[sonner-toaster]:[data-x-position=right]:right-0

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

export { Toaster, toast };
