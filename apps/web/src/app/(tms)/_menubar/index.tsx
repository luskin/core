'use client';
import { Nav, NavItem } from '@/ui/components/nav';
import { usePathname } from 'next/navigation';
import { createMenuBarRoutes } from './routes';
import { useMemo } from 'react';
import { Column } from '@/ui/layout/flex';
import { stringUtils } from '@shared/utils';

export function MenuBar() {
  const currentPath = usePathname();
  const routes = useMemo(() => createMenuBarRoutes(), []);
  return (
    <Nav>
      <Column className={'w-full overflow-y-scroll'}>
        {routes.map((routeProps) => {
          const routePropsHref = stringUtils.isString(routeProps.href) ? routeProps.href : routeProps.href.pathname;
          const isActive = Boolean(
            currentPath === '/'
              ? currentPath === routeProps.href
              : routePropsHref && routePropsHref !== '/' && currentPath.startsWith(routePropsHref)
          );

          return <NavItem key={routePropsHref} {...routeProps} isActive={isActive} />;
        })}
      </Column>

      <Column className={'mt-auto w-full'}>
        <NavItem
          href={{
            pathname: '/help',
          }}
          label="Get help now"
          icon="chatBubblesLeftRight"
          isActive={true}
          chevron
        />
      </Column>
    </Nav>
  );
}
