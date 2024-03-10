'use client';
import { Nav, NavItem } from '@/ui/components/nav';
import { usePathname } from 'next/navigation';
import { createMenuBarRoutes } from './routes';
import { useMemo } from 'react';
import { Column } from '@/ui/layout/flex';
import { stringUtils } from '@shared/utils';
import { useMenubar } from '@/ui/layout/menubar.provider';

interface MenuBarProps {}

export default function MenuBar(_props: MenuBarProps) {
  const { state } = useMenubar();
  const currentPath = usePathname();
  const routes = useMemo(() => createMenuBarRoutes(), []);

  return (
    <Nav>
      <Column className={'w-full'}>
        {routes.map((routeProps) => {
          const { additionalActiveHrefs, ...restProps } = routeProps;
          const routePropsHref = stringUtils.isString(routeProps.href) ? routeProps.href : routeProps.href.pathname;
          const isActive = Boolean(
            currentPath === '/'
              ? currentPath === routeProps.href
              : (routePropsHref && routePropsHref !== '/' && currentPath.startsWith(routePropsHref)) ||
                  routeProps.additionalActiveHrefs?.some((href) => currentPath.startsWith(href))
          );

          return <NavItem key={routePropsHref} {...restProps} isActive={isActive} collapsed={state.collapsed} />;
        })}
      </Column>

      <Column className={'mt-auto w-full'}>
        <NavItem
          href={{
            pathname: '/help',
          }}
          label="Get help now"
          icon="chatBubblesLeftRight"
          chevron
          collapsed={state.collapsed}
        />
      </Column>
    </Nav>
  );
}
