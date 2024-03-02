import { NavItemProps } from '@/ui/components/nav';

export function createDesignMenuBarGeneralRoutes(): Array<NavItemProps> {
  return [
    {
      label: 'Typography',
      href: '/design/docs/typography',
    },
    {
      label: 'Colors',
      href: '/design/docs/colors',
    },
  ];
}

export function createDesignMenuBarComponentRoutes(): Array<NavItemProps> {
  return [
    {
      label: 'Alert',
      href: '/design/docs/components/alert',
    },
    {
      label: 'Avatar',
      href: '/design/docs/components/avatar',
    },
    {
      label: 'Button',
      href: '/design/docs/components/button',
    },
    {
      label: 'Calendar',
      href: '/design/docs/components/calendar',
    },
    {
      label: 'Dropdown',
      href: '/design/docs/components/dropdown',
    },
    {
      label: 'Icon',
      href: '/design/docs/components/icon',
    },
    {
      label: 'Radio',
      href: '/design/docs/components/radio',
    },
    {
      label: 'Slider',
      href: '/design/docs/components/slider',
    },
    {
      label: 'Spinner',
      href: '/design/docs/components/spinner',
    },
    {
      label: 'Switch',
      href: '/design/docs/components/switch',
    },
    {
      label: 'Skeleton',
      href: '/design/docs/components/skeleton',
    },
    {
      label: 'Tabs',
      href: '/design/docs/components/tabs',
    },
    {
      label: 'Toaster',
      href: '/design/docs/components/toaster',
    },
    {
      label: 'Toggle',
      href: '/design/docs/components/toggle',
    },
    {
      label: 'Tooltip',
      href: '/design/docs/components/tooltip',
    },
  ];
}
