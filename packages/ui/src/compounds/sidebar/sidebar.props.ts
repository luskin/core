import { ReactNode } from "react"

export interface SidebarProps {
  children?: ReactNode | Array<ReactNode>
  collapsed?: boolean
}
