import { Row } from "@/ui/layout/flex"
import { PropsWithChildren } from "react"

interface MenuBarLayoutProps extends PropsWithChildren {
  menuBar: React.ReactNode
}

export default function MenuBarLayout(props: MenuBarLayoutProps) {
  return (
    <Row className={"h-full"}>
      <nav className="">{props.menuBar}</nav>
      <main className="h-full overflow-y-scroll w-full">{props.children}</main>
    </Row>
  )
}
