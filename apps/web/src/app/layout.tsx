import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import TopNav from "./_topnav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mothership",
  description: "The future of freight",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
        {children}
      </body>
    </html>
  )
}
