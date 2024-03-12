import MenuBarLayout from '@/ui/containers/menubar/menubar.layout';
import MenuBar from './_menubar';

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
