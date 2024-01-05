import { Icon, Sidebar } from "@repo/ui"

const navItems = [
  {
    label: "Typography",
    icon: Icon.Box,
    href: "/docs/components/typography",
  },
  {
    label: "Button",
    icon: Icon.Box,
    href: "/docs/components/button",
  },
  {
    label: "Switch",
    icon: Icon.User,
    href: "/docs/components/switch",
  },
]

export function SideNav() {
  return (
    <Sidebar>
      <Sidebar.Header>{/** TODO - Mothership Image */}</Sidebar.Header>
      <Sidebar.Group label="Components">
        {navItems.map((item) => (
          <Sidebar.Item icon={item.icon}>{item.label}</Sidebar.Item>
        ))}
      </Sidebar.Group>
    </Sidebar>
  )
}
