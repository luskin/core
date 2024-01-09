import { LeftSidebarLayout } from "@core/ui"
import { SideNav } from "../components/sidenav"

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LeftSidebarLayout sidebar={<SideNav />}>{children}</LeftSidebarLayout>
}
