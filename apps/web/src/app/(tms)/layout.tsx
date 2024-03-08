import { MenuBar } from './_menubar';
import MenuBarLayout from '../_layouts/menu-bar.layout';

export default async function TMSLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MenuBarLayout menuBar={<MenuBar />} className="bg-slate-3">
      {children}
    </MenuBarLayout>
  );
}
