import { NavItemProps } from '@/ui/components/nav';

export function createDesignMenuBarGeneralRoutes(): Array<NavItemProps> {
  return [
    {
      label: 'Introduction',
      href: '/design/docs',
    },
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
      label: 'Modal',
      href: '/design/docs/components/modal',
    },
    {
      label: 'Notification',
      href: '/design/docs/components/notification',
    },
    {
      label: 'Popover',
      href: '/design/docs/components/popover',
    },
    {
      label: 'Progress',
      href: '/design/docs/components/progress',
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
      label: 'Toggle',
      href: '/design/docs/components/toggle',
    },
    {
      label: 'Tooltip',
      href: '/design/docs/components/tooltip',
    },
  ];
}

export function createDesignMenuBarCompoundRoutes(): Array<NavItemProps> {
  return [
    {
      label: 'Value Prop',
      href: '/design/docs/compounds/value-prop',
    },
  ];
}
