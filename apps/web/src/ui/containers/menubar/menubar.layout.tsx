'use client';
import { cn } from '@/lib/tailwind/utils';
import { Row } from '@/ui/layout/flex';
import { PropsWithChildren } from 'react';
import { MenubarProvider, useMenubar } from './menubar.provider';

interface MenuBarLayoutProps extends PropsWithChildren {
  menuBar: React.ReactNode;
  className?: string;
}

function ProvidedMenuBarLayout({ menuBar, className, ...props }: MenuBarLayoutProps) {
  const { state } = useMenubar();

  return (
    <Row className={cn('h-full w-full overflow-hidden', className)}>
      <aside
        className={cn(
          'h-full overflow-y-scroll transition-all duration-300 ease-in-out',
          state.collapsed ? 'w-20' : 'w-[232px]'
        )}
      >
        {menuBar}
      </aside>
      <main className="h-full flex-1 overflow-y-scroll" {...props} />
    </Row>
  );
}

export default function MenuBarLayout({ menuBar, className, ...props }: MenuBarLayoutProps) {
  return (
    <MenubarProvider>
      <ProvidedMenuBarLayout menuBar={menuBar} className={className} {...props} />
    </MenubarProvider>
  );
}
