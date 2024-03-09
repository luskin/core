import MenuBarLayout from '../_layouts/menu-bar.layout';
import AppBarLayout from '../_layouts/app-bar.layout';

export default async function TMSLayout({
  appbar,
  menubar,
  children,
}: Readonly<{
  appbar: React.ReactNode;
  menubar: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <AppBarLayout appbar={appbar}>
      <MenuBarLayout menuBar={menubar} className="bg-slate-3">
        {children}
      </MenuBarLayout>
    </AppBarLayout>
  );
}
