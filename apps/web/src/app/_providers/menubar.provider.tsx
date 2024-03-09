import { PropsWithChildren, createContext, useContext, useReducer } from 'react';

interface MenubarState {
  collapsed: boolean;
}

type MenubarAction = 'toggle' | 'expand' | 'collapse';

interface MenubarContextProps {
  state: MenubarState;
  toggle: () => void;
  expand: () => void;
  collapse: () => void;
}

const MenubarContext = createContext<MenubarContextProps | undefined>(undefined);

function menubarReducer(state: MenubarState, action: MenubarAction): MenubarState {
  switch (action) {
    case 'toggle':
      return { collapsed: !state.collapsed };
    case 'expand':
      return { collapsed: false };
    case 'collapse':
      return { collapsed: true };
    default:
      return state;
  }
}

export function MenubarProvider({ children }: PropsWithChildren<any>) {
  const [state, dispatch] = useReducer(menubarReducer, { collapsed: false });

  const toggle = () => dispatch('toggle');
  const expand = () => dispatch('expand');
  const collapse = () => dispatch('collapse');

  return <MenubarContext.Provider value={{ state, toggle, expand, collapse }}>{children}</MenubarContext.Provider>;
}

export function useMenubar() {
  const context = useContext(MenubarContext);
  if (context === undefined) {
    throw new Error('useMenubar must be used within a MenubarProvider');
  }
  return context;
}
