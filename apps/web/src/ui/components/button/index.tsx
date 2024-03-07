import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/tailwind/utils';
import { Icon, IconName } from '../icon';
import { headingVariants } from '../typography/heading';
import { labelVariants } from '../typography/label';
import { Spinner, SpinnerProps } from '../spinner';

const DEFAULT_BUTTON_SIZE = 'md';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 transition',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-br from-accent-10 to-accent-11 text-slate-1 hover:from-accent-11 hover:to-accent-11',
        secondary: 'bg-slate-12 text-slate-1 hover:bg-slate-11',
        tertiary: 'bg-accent-5 text-accent-11 hover:bg-accent-6',
        ghost: 'border border-slate-7 text-slate-12 hover:border-slate-12',
        destructive: 'bg-error-10 text-slate-1 hover:bg-error-11',
        colorless: '',
      },
      size: {
        lg: cn(headingVariants({ size: 'sm', variant: 'colorless' }), 'h-12 rounded-lg'),
        md: cn(labelVariants({ size: 'md', variant: 'colorless' }), 'h-8 rounded-lg'),
        sm: cn(labelVariants({ size: 'md', variant: 'colorless' }), 'h-6 rounded-md'),
        xs: cn(labelVariants({ size: 'sm', variant: 'colorless' }), 'h-[15px] rounded'),
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: DEFAULT_BUTTON_SIZE,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: IconName;
  loading?: boolean;
}

const getIconClassName = (size: VariantProps<typeof buttonVariants>['size']) => {
  switch (size) {
    case 'lg':
      return 'h-4';
    case 'md':
      return 'h-3';
    case 'sm':
      return 'h-2';
    case 'xs':
      throw new Error('Icons are not supported with the xs button size');
    default:
      throw new Error(`Invalid button size: ${size}`);
  }
};

const getButtonPadding = (size: VariantProps<typeof buttonVariants>['size'], isIconOnly: boolean) => {
  switch (size) {
    case 'lg':
      return isIconOnly ? 'w-12' : 'px-4';
    case 'md':
      return isIconOnly ? 'w-8' : 'px-3';
    case 'sm':
      return isIconOnly ? 'w-6' : 'px-2';
    case 'xs':
      return 'px-1.5';
    default:
      throw new Error(`Invalid button size: ${size}`);
  }
};

const getSpinnerSize = (size: VariantProps<typeof buttonVariants>['size']): SpinnerProps['size'] => {
  switch (size) {
    case 'lg':
      return 'md';
    case 'md':
      return 'sm';
    case 'sm':
      return 'xs';
    case 'xs':
      return 'xs';
    default:
      throw new Error(`Invalid button size: ${size}`);
  }
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, icon, variant, loading, size = DEFAULT_BUTTON_SIZE, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const isIconOnly = Boolean(!children && icon);
    return (
      <Comp
        ref={ref}
        className={cn(
          getButtonPadding(size, isIconOnly),
          buttonVariants({ variant, size, className }),
          icon && 'space-x-4',
          loading && 'cursor-wait text-opacity-0'
        )}
        {...props}
      >
        {icon && <Icon name={icon} className={cn(getIconClassName(size), !isIconOnly && 'mr-2')} />}
        {children}
        {loading && (
          <div className="absolute flex h-full w-full items-center justify-center">
            <Spinner size={getSpinnerSize(size)} />
          </div>
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

type XButtonProps = ButtonProps & {
  align?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

const XButton = React.forwardRef<HTMLButtonElement, XButtonProps>(({ align, className, ...props }, ref) => (
  <Button
    ref={ref}
    variant={'colorless'}
    className={cn(
      'text-slate-8 hover:text-slate-6 px-1! w-8 transition-colors',
      align === 'top-left' && 'items-start justify-start',
      align === 'top-right' && 'items-start justify-end',
      align === 'bottom-left' && 'items-end justify-start',
      align === 'bottom-right' && 'items-end justify-end'
    )}
    icon="xmark"
    {...props}
  />
));

export { Button, XButton, buttonVariants };
