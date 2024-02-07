import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { DashboardLayout } from "@/components/layout/dashboard/dashboard.layout"
import { SideNav } from "./_sidenav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <DashboardLayout>
          <SideNav />
          {children}
        </DashboardLayout>
      </body>
    </html>
  )
}
