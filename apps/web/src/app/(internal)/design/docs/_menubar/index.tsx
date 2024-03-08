'use client';
import { Nav, NavItem } from '@/ui/components/nav';
import { Column } from '@/ui/layout/flex';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { createDesignMenuBarComponentRoutes, createDesignMenuBarGeneralRoutes } from './routes';
import { NavLabel } from '@/ui/components/nav/nav-label';
import { stringUtils } from '@shared/utils';

export default function DesignMenuBar() {
  const currentPath = usePathname();
  const generalRoutes = useMemo(() => createDesignMenuBarGeneralRoutes(), []);
  const componentRoutes = useMemo(() => createDesignMenuBarComponentRoutes(), []);
  return (
    <Nav>
      <Column className={'w-full'}>
        <NavLabel>General</NavLabel>
        {generalRoutes.map((routeProps) => {
          const routePropsHref = stringUtils.isString(routeProps.href) ? routeProps.href : routeProps.href.pathname;
          const isActive = Boolean(routePropsHref && currentPath.startsWith(routePropsHref));
          return <NavItem key={routePropsHref} {...routeProps} isActive={isActive} />;
        })}
        <NavLabel>Components</NavLabel>
        {componentRoutes.map((routeProps) => {
          const routePropsHref = stringUtils.isString(routeProps.href) ? routeProps.href : routeProps.href.pathname;
          const isActive = Boolean(routePropsHref && currentPath.startsWith(routePropsHref));
          return <NavItem key={routePropsHref} {...routeProps} isActive={isActive} />;
        })}
      </Column>
    </Nav>
  );
}
