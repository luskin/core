import { createStore } from 'zustand/vanilla';

export type AppbarState = {
  content: React.ReactNode | null;
};

export type AppbarActions = {
  setContent: (content: React.ReactNode | null) => void;
};

export type AppbarStore = AppbarState & AppbarActions;

export const defaultInitState: AppbarState = {
  content: null,
};

export const createAppbarStore = (initState: AppbarState = defaultInitState) => {
  return createStore<AppbarStore>()((set) => ({
    ...initState,
    setContent: (content) => set({ content }),
  }));
};
