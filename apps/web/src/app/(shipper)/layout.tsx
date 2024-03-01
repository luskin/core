import { DashboardLayout } from "@/ui/layout/dashboard/dashboard.layout"
import { MenuBar } from "../_menubar"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <DashboardLayout>
      <MenuBar />
      {children}
    </DashboardLayout>
  )
}
