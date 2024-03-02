import React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/tailwind/utils';
import { Slot } from '@radix-ui/react-slot';

const DEFAULT_SIZE = 'md';

const labelVariants = cva('font-base font-semibold', {
  variants: {
    variant: {
      primary: 'text-slate-12',
      secondary: 'text-slate-11',
      inverted: 'text-white',
      destructive: 'text-error-11',
      colorless: '',
    },
    size: {
      lg: 'font-body text-sm leading-3 capsize',
      md: 'font-body text-xs leading-2 capsize',
      sm: 'font-body text-[10px] leading-tight capsize',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: DEFAULT_SIZE,
  },
});

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelVariants> {
  asChild?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'label';
    return <Comp className={cn(labelVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Label.displayName = 'Label';

export { Label, labelVariants };
