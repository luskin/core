'use client';

import { useAppbar } from './_hooks/useAppbar';

export function AppbarContent() {
  const content = useAppbar((state) => state.content);
  return <div className="h-full flex-1">{content}</div>;
}
