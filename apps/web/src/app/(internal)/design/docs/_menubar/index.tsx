'use client';
import { Nav, NavItem } from '@/ui/components/nav';
import { Column } from '@/ui/layout/flex';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { createDesignMenuBarComponentRoutes, createDesignMenuBarGeneralRoutes } from './routes';
import { NavLabel } from '@/ui/components/nav/nav-label';

export default function DesignMenuBar() {
  const currentPath = usePathname();
  const generalRoutes = useMemo(() => createDesignMenuBarGeneralRoutes(), []);
  const componentRoutes = useMemo(() => createDesignMenuBarComponentRoutes(), []);
  return (
    <Nav>
      <Column className={'w-full overflow-y-scroll'}>
        <NavLabel>General</NavLabel>
        {generalRoutes.map((routeProps) => {
          const isActive = currentPath.startsWith(routeProps.href);
          return <NavItem key={routeProps.href} {...routeProps} isActive={isActive} />;
        })}
        <NavLabel>Components</NavLabel>
        {componentRoutes.map((routeProps) => {
          const isActive = currentPath.startsWith(routeProps.href);
          return <NavItem key={routeProps.href} {...routeProps} isActive={isActive} />;
        })}
      </Column>
    </Nav>
  );
}
