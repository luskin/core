import { NavItemProps } from "@/ui/components/nav"

export function createDesignSideNavComponentRoutes(): Array<NavItemProps> {
  return [
    {
      label: "Alert",
      href: "/design/docs/components/alert",
    },
    {
      label: "Button",
      href: "/design/docs/components/button",
    },
    {
      label: "Icon",
      href: "/design/docs/components/icon",
    },
    {
      label: "Radio",
      href: "/design/docs/components/radio",
    },
    {
      label: "Tooltip",
      href: "/design/docs/components/tooltip",
    },
  ]
}
