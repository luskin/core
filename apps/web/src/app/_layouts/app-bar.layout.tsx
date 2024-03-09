import { Column } from '@/ui/layout/flex';
import { PropsWithChildren } from 'react';

interface AppBarLayoutProps extends PropsWithChildren {
  appbar: React.ReactNode;
}

export default function AppBarLayout(props: AppBarLayoutProps) {
  return (
    <Column className={'h-full min-h-screen'}>
      <header className="fixed top-0 z-50 h-16 w-full">{props.appbar}</header>
      <main className="w-full flex-1 overflow-hidden pt-16">{props.children}</main>
    </Column>
  );
}
