import { Icon, Sidebar } from "@core/ui"
import Image from "next/image"
import Link from "next/link"

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
      <Sidebar.Header>
        <Image
          src="/images/brand/logo-wordmark-md.svg"
          alt="Mothership Logo"
          width={117}
          height={13}
          priority
        />
      </Sidebar.Header>
      <Sidebar.Group label="Components">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} passHref>
            <Sidebar.Item icon={item.icon}>{item.label}</Sidebar.Item>
          </Link>
        ))}
      </Sidebar.Group>
    </Sidebar>
  )
}
