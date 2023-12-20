import { Icon, Sidebar } from "@repo/ui"
import Image from "next/image"
import Link from "next/link"

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
        <Link href={"/docs/components/typography"}>
          <Sidebar.Item icon={Icon.Box}>Typography</Sidebar.Item>
        </Link>
        <Sidebar.Item icon={Icon.Box}>Button</Sidebar.Item>
        <Sidebar.Item icon={Icon.Box}>Switch</Sidebar.Item>
      </Sidebar.Group>
    </Sidebar>
  )
}
