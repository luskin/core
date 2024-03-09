import AppBarLayout from '../_layouts/app-bar.layout';
import AppBar from '../(tms)/@appbar/layout';
import { cookies } from 'next/headers';
import { Cookies } from '@shared/types';
import { AuthRedirect } from './auth/link/auth-redirect-handler';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isFromAuthRedirect = cookies().get(Cookies.AuthRedirect)?.value === 'true';
  console.log('The layout is being rendered: ', isFromAuthRedirect);
  return isFromAuthRedirect ? <AuthRedirect /> : <>{children}</>;
}
