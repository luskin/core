import type { Metadata } from 'next';
import './globals.css';
import { bodyFont, brandFont } from '@/lib/fonts';
import { getSession } from '@/lib/auth/auth.session';
import { AuthProvider } from './(auth)/auth.provider';
import { cookies } from 'next/headers';
import { Cookies } from '@shared/types';
import { AuthRedirect } from './auth-redirect';
import { AppbarStoreProvider } from './_appbar/appbar.provider';
import AppBarLayout from './_appbar/appbar.layout';
import AppBar from './_appbar';
import { NotificationToaster } from '@/ui/components/notification';

export const metadata: Metadata = {
  title: 'Mothership',
  description: 'The future of freight',
};

export default async function RootLayout({
  modal,
  children,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const isFromAuthRedirect = cookies().get(Cookies.AuthRedirect)?.value === 'true';

  return (
    <html lang="en">
      <AuthProvider initialSession={session}>
        <body className={`${brandFont.variable} ${bodyFont.variable} h-screen w-screen`}>
          {isFromAuthRedirect ? (
            <AuthRedirect />
          ) : (
            <AppbarStoreProvider>
              <AppBarLayout appbar={<AppBar />}>
                {modal}
                {children}
              </AppBarLayout>
            </AppbarStoreProvider>
          )}
        </body>
        <NotificationToaster />
      </AuthProvider>
    </html>
  );
}
