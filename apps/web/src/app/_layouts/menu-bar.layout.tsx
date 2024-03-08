import { cn } from '@/lib/tailwind/utils';
import { Row } from '@/ui/layout/flex';
import { PropsWithChildren } from 'react';

interface MenuBarLayoutProps extends PropsWithChildren {
  menuBar: React.ReactNode;
  className?: string;
}

export default function MenuBarLayout({ menuBar, className, ...props }: MenuBarLayoutProps) {
  return (
    <Row className={cn('h-full w-full overflow-hidden', className)}>
      <aside className={'h-full w-[232px] overflow-y-scroll'}>{menuBar}</aside>
      <main className="h-full flex-1 overflow-y-scroll" {...props} />
    </Row>
  );
}
