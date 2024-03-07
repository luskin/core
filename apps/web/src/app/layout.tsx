import type { Metadata } from 'next';
import './globals.css';
import { bodyFont, brandFont } from '@/lib/fonts';
import { getSession } from '@/lib/auth/auth.session';
import { AuthProvider } from './_providers/auth.provider';
import { NotificationProvider } from './_providers/notification.provider';

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
  return (
    <html lang="en">
      <AuthProvider initialSession={session}>
        <NotificationProvider>
          <body className={`${brandFont.variable} ${bodyFont.variable} h-screen w-screen`}>
            {modal}
            {children}
          </body>
        </NotificationProvider>
      </AuthProvider>
    </html>
  );
}
