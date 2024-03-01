import { Column } from "@/ui/layout/flex"
import { PropsWithChildren } from "react"

interface AppBarLayoutProps extends PropsWithChildren {
  appBar: React.ReactNode
  footer?: React.ReactNode
}

export default function AppBarLayout(props: AppBarLayoutProps) {
  return (
    <Column className={"h-full"}>
      <header className="sticky top-0 z-50 w-full">{props.appBar}</header>
      <main className="w-full flex-grow overflow-hidden">{props.children}</main>
      {props.footer && <footer className="w-full">{props.footer}</footer>}
    </Column>
  )
}
