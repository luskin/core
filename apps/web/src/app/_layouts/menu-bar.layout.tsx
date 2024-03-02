import { cn } from "@/lib/tailwind/utils"
import { Row } from "@/ui/layout/flex"
import { PropsWithChildren } from "react"

interface MenuBarLayoutProps extends PropsWithChildren {
  menuBar: React.ReactNode
  hasAppBar?: boolean
}

export default function MenuBarLayout({
  hasAppBar,
  menuBar,
  ...props
}: MenuBarLayoutProps) {
  return (
    <div
      className={
        "flex-1 items-start md:grid md:grid-cols-[232px_minmax(0,1fr)]"
      }
    >
      <aside
        className={cn(
          "fixed z-30 hidden w-full shrink-0 md:sticky md:block",
          hasAppBar ? "top-16 h-[calc(100vh-4rem)]" : "top-0 h-screen"
        )}
      >
        {menuBar}
      </aside>
      <main className="relative" {...props} />
    </div>
  )
}
