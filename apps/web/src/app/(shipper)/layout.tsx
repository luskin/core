import { MenuBar } from './_menubar';
import AppBarLayout from '../_layouts/app-bar.layout';
import AppBar from '../_appbar';
import MenuBarLayout from '../_layouts/menu-bar.layout';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppBarLayout appBar={<AppBar />}>
      <MenuBarLayout menuBar={<MenuBar />} hasAppBar={true} className="bg-slate-3">
        {children}
      </MenuBarLayout>
    </AppBarLayout>
  );
}
