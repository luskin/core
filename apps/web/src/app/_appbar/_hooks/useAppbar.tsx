import { AppbarStoreContext } from '@/app/_appbar/appbar.provider';
import { AppbarStore } from '../appbar.store';
import { useContext } from 'react';
import { useStore } from 'zustand';

export const useAppbar = <T,>(selector: (store: AppbarStore) => T): T => {
  const appbarStoreContext = useContext(AppbarStoreContext);

  if (!appbarStoreContext) {
    throw new Error(`useAppbarStore must be use within AppbarStoreProvider`);
  }

  return useStore(appbarStoreContext, selector);
};
