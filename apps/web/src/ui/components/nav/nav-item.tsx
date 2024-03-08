import Link, { LinkProps } from 'next/link';
import { Icon, IconName } from '../icon';
import { Label, Paragraph } from '../typography';
import React from 'react';
import { cn } from '@/lib/tailwind/utils';

export interface NavItemProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  asChild?: boolean;
  icon?: IconName;
  label?: string;
  href: LinkProps['href'];
  isActive?: boolean;
  disableHover?: boolean;
  chevron?: boolean;
}

const NavItem = React.forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ icon, label, href, isActive, chevron, disableHover = false, ...props }, ref) => {
    const className = cn(
      `flex flex-row justify-start items-center h-10 px-4 w-full rounded-lg transition ease-in-out flex-shrink-0`,
      isActive && 'bg-slate-6',
      !disableHover && 'hover:bg-slate-5'
    );

    return (
      <Link className={className} href={href} ref={ref} {...props}>
        {icon && <Icon name={icon} className={cn('h-4', isActive ? 'text-slate-12' : 'text-slate-8')} />}
        <Label size={'md'} variant={isActive ? 'primary' : 'secondary'} className={cn('flex-1', icon && 'ml-4')}>
          {label}
        </Label>
        {chevron && <Icon name="chevronRight" className={cn('text-slate-9 h-2')} />}
      </Link>
    );
  }
);
NavItem.displayName = 'NavItem';

export { NavItem };
