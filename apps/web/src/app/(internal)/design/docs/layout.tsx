import { PropsWithChildren } from 'react';
import MenuBarLayout from '@/ui/layout/menubar.layout';
import DesignMenuBar from './_menubar';

export default function Layout({ children }: PropsWithChildren) {
  return <MenuBarLayout menuBar={<DesignMenuBar />}>{children}</MenuBarLayout>;
}
