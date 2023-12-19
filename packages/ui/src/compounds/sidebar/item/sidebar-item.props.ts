import { ReactNode } from "react"

export interface SidebarItemProps {
  children?: ReactNode
  icon?: ReactNode
  isSelected?: boolean
  onClick?: () => void
}
