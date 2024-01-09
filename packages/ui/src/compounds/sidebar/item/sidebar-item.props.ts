import { ComponentType, ReactNode } from "react"
import { InjectedClassNameProps } from "../../../utils/style"
import { IconProps } from "../../../icons/icon.props"

export interface SidebarItemProps {
  children?: string | ReactNode
  icon?: ComponentType<InjectedClassNameProps<IconProps>>
  isSelected?: boolean
  onClick?: () => void
}
