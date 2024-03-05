import AppBarLayout from '../_layouts/app-bar.layout';
import AppBar from '../_appbar';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppBarLayout appBar={<AppBar />}>{children}</AppBarLayout>;
}
