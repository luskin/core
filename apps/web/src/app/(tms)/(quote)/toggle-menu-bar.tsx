'use client';

import { useAppbarStore } from '@/app/_providers/appbar.provider';
import { useMenubar } from '@/app/_providers/menubar.provider';
import { Button } from '@/ui/components/button';
import { Column } from '@/ui/layout/flex';

export function ToggleMenuBar() {
  const { state, toggle } = useMenubar();
  return (
    <Column gap={4}>
      <Button className="mt-8" variant="secondary" onClick={toggle}>
        {state.collapsed ? 'Expand Menubar' : 'Collapse Menubar'}
      </Button>
    </Column>
  );
}
