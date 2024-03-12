'use client';

import { type ReactNode, createContext, useRef } from 'react';
import { type StoreApi } from 'zustand';

import { type AppbarStore, createAppbarStore } from '@/app/_appbar/appbar.store';

export const AppbarStoreContext = createContext<StoreApi<AppbarStore> | null>(null);

export interface AppbarStoreProviderProps {
  children: ReactNode;
}

export const AppbarStoreProvider = ({ children }: AppbarStoreProviderProps) => {
  const storeRef = useRef<StoreApi<AppbarStore>>();
  if (!storeRef.current) {
    storeRef.current = createAppbarStore();
  }

  return <AppbarStoreContext.Provider value={storeRef.current}>{children}</AppbarStoreContext.Provider>;
};
