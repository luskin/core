import { LeftSidebarLayout } from "@repo/ui"
import { SideNav } from "../components/sidenav"

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LeftSidebarLayout sidebar={<SideNav />}>{children}</LeftSidebarLayout>
}
