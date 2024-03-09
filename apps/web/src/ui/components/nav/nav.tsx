import { Column } from '@/ui/layout/flex';
import { PropsWithChildren } from 'react';

export interface NavProps extends PropsWithChildren {
  collapsed?: boolean;
}

export function Nav({ collapsed, children }: NavProps) {
  return <Column className="h-full w-full px-4 py-4">{children}</Column>;
}
