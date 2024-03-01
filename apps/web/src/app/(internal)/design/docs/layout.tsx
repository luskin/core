import { PropsWithChildren } from "react"
import MenuBarLayout from "@/app/_layouts/menu-bar.layout"
import DesignMenuBar from "../_menubar"

export default function Layout({ children }: PropsWithChildren) {
  return <MenuBarLayout menuBar={<DesignMenuBar />}>{children}</MenuBarLayout>
}
