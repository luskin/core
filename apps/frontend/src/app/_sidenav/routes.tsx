import { NavItemProps } from "@/components/primitives/nav"

export function createSideNavRoutes(): Array<NavItemProps> {
  return [
    {
      icon: "trucks",
      label: "Quote",
      href: "/",
    },
    {
      icon: "locationArrow",
      label: "Track",
      href: "/track",
    },
    {
      icon: "claimsShield",
      label: "Claims",
      href: "/claims",
    },
    {
      icon: "alienShip",
      label: "Reporting",
      href: "/reporting",
    },
    {
      icon: "paymentCard",
      label: "Billing",
      href: "/billing",
    },
  ]
}
