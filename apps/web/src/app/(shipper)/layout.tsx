import { DashboardLayout } from "@/ui/layout/dashboard/dashboard.layout"
import { SideNav } from "../_sidenav"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <DashboardLayout>
      <SideNav />
      {children}
    </DashboardLayout>
  )
}
