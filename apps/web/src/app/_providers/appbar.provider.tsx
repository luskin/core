'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { type StoreApi, useStore } from 'zustand';

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

export const useAppbarStore = <T,>(selector: (store: AppbarStore) => T): T => {
  const appbarStoreContext = useContext(AppbarStoreContext);

  if (!appbarStoreContext) {
    throw new Error(`useAppbarStore must be use within AppbarStoreProvider`);
  }

  return useStore(appbarStoreContext, selector);
};
