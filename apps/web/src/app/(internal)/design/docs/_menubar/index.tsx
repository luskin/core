'use client';
import { Nav, NavItem } from '@/ui/components/nav';
import { Column } from '@/ui/layout/flex';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import {
  createDesignMenuBarComponentRoutes,
  createDesignMenuBarGeneralRoutes,
  createDesignMenuBarCompoundRoutes,
} from './routes';
import { NavLabel } from '@/ui/components/nav/nav-label';
import { stringUtils } from '@shared/utils';

export default function DesignMenuBar() {
  const currentPath = usePathname();
  const generalRoutes = useMemo(() => createDesignMenuBarGeneralRoutes(), []);
  const componentRoutes = useMemo(() => createDesignMenuBarComponentRoutes(), []);
  const compoundRoutes = useMemo(() => createDesignMenuBarCompoundRoutes(), []);
  return (
    <Nav>
      <Column className={'w-full space-y-2'}>
        <NavLabel>General</NavLabel>
        {generalRoutes.map((routeProps) => {
          const routePropsHref = stringUtils.isString(routeProps.href) ? routeProps.href : routeProps.href.pathname;
          const isActive = Boolean(routePropsHref && currentPath == routePropsHref);
          return <NavItem key={routePropsHref} {...routeProps} isActive={isActive} />;
        })}
        <NavLabel>Components</NavLabel>
        {componentRoutes.map((routeProps) => {
          const routePropsHref = stringUtils.isString(routeProps.href) ? routeProps.href : routeProps.href.pathname;
          const isActive = Boolean(routePropsHref && currentPath == routePropsHref);
          return <NavItem key={routePropsHref} {...routeProps} isActive={isActive} />;
        })}
        <NavLabel>Compounds</NavLabel>
        {compoundRoutes.map((routeProps) => {
          const routePropsHref = stringUtils.isString(routeProps.href) ? routeProps.href : routeProps.href.pathname;
          const isActive = Boolean(routePropsHref && currentPath == routePropsHref);
          return <NavItem key={routePropsHref} {...routeProps} isActive={isActive} />;
        })}
      </Column>
    </Nav>
  );
}
