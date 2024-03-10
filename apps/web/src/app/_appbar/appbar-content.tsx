'use client';

import { useAppbarStore } from '../_providers/appbar.provider';

export function AppbarContent() {
  const content = useAppbarStore((state) => state.content);
  return <div className="h-full flex-1">{content}</div>;
}
