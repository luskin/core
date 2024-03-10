import MenuBarLayout from '../../ui/layout/menubar.layout';
import MenuBar from './_menubar';

export default async function TMSLayout({
  mytest,
  children,
}: Readonly<{
  mytest: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <MenuBarLayout menuBar={<MenuBar />} className="bg-slate-3">
      {mytest}
      {children}
    </MenuBarLayout>
  );
}
