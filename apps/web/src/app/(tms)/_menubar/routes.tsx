import { NavItemProps } from '@/ui/components/nav';

export function createMenuBarRoutes(): Array<
  NavItemProps & {
    additionalActiveHrefs?: string[];
  }
> {
  return [
    {
      icon: 'truckSideRight',
      label: 'Quote',
      href: '/',
      additionalActiveHrefs: ['/quote'],
    },
    {
      icon: 'locationArrow',
      label: 'Track',
      href: '/track',
    },
    {
      icon: 'claimsShield',
      label: 'Claims',
      href: '/claims',
    },
    {
      icon: 'alienShip',
      label: 'Reporting',
      href: '/reporting',
    },
    {
      icon: 'paymentCard',
      label: 'Billing',
      href: '/billing',
    },
    {
      icon: 'barChartSquare',
      label: 'Recent quotes',
      href: '/quotes/recent',
    },
  ];
}
