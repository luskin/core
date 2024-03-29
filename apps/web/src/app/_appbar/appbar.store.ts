import { createStore } from 'zustand/vanilla';

export type AppbarState = {
  content: React.ReactNode | null;
  backgroundSolid: boolean;
};

export type AppbarActions = {
  setContent: (content: React.ReactNode | null) => void;
  setBackgroundSolid: (setBackgroundSolid: boolean) => void;
};

export type AppbarStore = AppbarState & AppbarActions;

export const defaultInitState: AppbarState = {
  content: null,
  backgroundSolid: false,
};

export const createAppbarStore = (initState: AppbarState = defaultInitState) => {
  return createStore<AppbarStore>()((set) => ({
    ...initState,
    setContent: (content) => set({ content }),
    setBackgroundSolid: (backgroundSolid) => set({ backgroundSolid }),
  }));
};
