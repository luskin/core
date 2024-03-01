import type { Metadata } from "next"
import "./globals.css"
import { bodyFont } from "@/lib/fonts"

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
      <body className={`${bodyFont.className} h-screen w-screen`}>
        {children}
      </body>
    </html>
  )
}
