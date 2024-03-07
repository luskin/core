import type { Metadata } from 'next';
import './globals.css';
import { bodyFont, brandFont } from '@/lib/fonts';
import NotificationProvider from './_providers/toast.provider';
import { AuthProvider } from './_providers/auth.provider';
import { session } from '@/lib/auth/auth.session';

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
  const user = await session();
  return (
    <html lang="en">
      <AuthProvider serverUser={user}>
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
