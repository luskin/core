'use client';

import { useMenubar } from '@/app/_providers/menubar.provider';
import { Button } from '@/ui/components/button';

export function ToggleMenuBar() {
  const { state, toggle } = useMenubar();
  return (
    <Button className="mt-8" variant="secondary" onClick={toggle}>
      {state.collapsed ? 'Expand Menubar' : 'Collapse Menubar'}
    </Button>
  );
}
