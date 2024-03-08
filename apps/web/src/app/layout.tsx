import type { Metadata } from 'next';
import './globals.css';
import { bodyFont, brandFont } from '@/lib/fonts';
import { getSession } from '@/lib/auth/auth.session';
import { AuthProvider } from './_providers/auth.provider';
import { NotificationProvider } from './_providers/notification.provider';
import AppBarLayout from './_layouts/app-bar.layout';
import { cookies } from 'next/headers';
import { Cookies } from '@shared/types';
import { AuthRedirect } from './auth-redirect';

export const metadata: Metadata = {
  title: 'Mothership',
  description: 'The future of freight',
};

export default async function RootLayout({
  modal,
  appbar,
  children,
}: Readonly<{
  appbar: React.ReactNode;
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const isFromAuthRedirect = cookies().get(Cookies.AuthRedirect)?.value === 'true';

  return (
    <html lang="en">
      <AuthProvider initialSession={session}>
        <NotificationProvider>
          <body className={`${brandFont.variable} ${bodyFont.variable} h-screen w-screen`}>
            {isFromAuthRedirect ? (
              <AuthRedirect />
            ) : (
              <AppBarLayout appBar={appbar}>
                {modal}
                {children}
              </AppBarLayout>
            )}
          </body>
        </NotificationProvider>
      </AuthProvider>
    </html>
  );
}
