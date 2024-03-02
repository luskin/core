import type { Metadata } from 'next';
import './globals.css';
import { bodyFont, brandFont } from '@/lib/fonts';
import ToastProvider from './_providers/toast.provider';

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
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
