import type { Metadata } from 'next';
import './globals.css';
import { bodyFont, brandFont } from '@/lib/fonts';
import NotificationProvider from './_providers/toast.provider';

export const metadata: Metadata = {
  title: 'Mothership',
  description: 'The future of freight',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${brandFont.variable} ${bodyFont.variable} h-screen w-screen`}>
        <NotificationProvider>{children}</NotificationProvider>
      </body>
    </html>
  );
}
