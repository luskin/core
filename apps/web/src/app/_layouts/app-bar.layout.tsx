import { Column } from "@/ui/layout/flex"
import { PropsWithChildren } from "react"

interface AppBarLayoutProps extends PropsWithChildren {
  appBar: React.ReactNode
  footer?: React.ReactNode
}

export default function AppBarLayout(props: AppBarLayoutProps) {
  return (
    <Column className={"h-full min-h-screen"}>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        {props.appBar}
      </header>
      <main className="w-full flex-1">{props.children}</main>
      {props.footer && <footer className="w-full">{props.footer}</footer>}
    </Column>
  )
}
