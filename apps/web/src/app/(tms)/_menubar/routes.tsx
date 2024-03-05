import { NavItemProps } from "@/ui/components/nav"

export function createMenuBarRoutes(): Array<NavItemProps> {
  return [
    {
      icon: "truckSideRight",
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
