'use client';
import { Header } from '@/ui/layout/header';
import { PropsWithChildren } from 'react';
import { useAppbar } from './_hooks/useAppbar';

interface AppBarHeaderProps extends PropsWithChildren {}

export default function AppBarHeader({ children }: AppBarHeaderProps) {
  const backgroundSolid = useAppbar((state) => state.backgroundSolid);
  return <Header className={backgroundSolid ? 'border-b-border border bg-white' : 'bg-transparent'}>{children}</Header>;
}
