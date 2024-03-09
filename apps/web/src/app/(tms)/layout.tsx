import { MenuBar } from './_menubar';
import MenuBarLayout from '../_layouts/menu-bar.layout';
import AppBarLayout from '../_layouts/app-bar.layout';
import { Column } from '@/ui/layout/flex';

export default async function TMSLayout({
  appbar,
  children,
}: Readonly<{
  appbar: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <Column>
      {appbar}
      <MenuBarLayout menuBar={<MenuBar />} className="bg-slate-3">
        {children}
      </MenuBarLayout>
    </Column>
  );
}
