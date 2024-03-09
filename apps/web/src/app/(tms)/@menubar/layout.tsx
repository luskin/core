'use client';

import { PropsWithChildren } from 'react';

interface MenuBarProps extends PropsWithChildren {}

export default function MenuBarParallelLayout(props: MenuBarProps) {
  return props.children;
}
