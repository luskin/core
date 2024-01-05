import { ComponentType } from "react"
import { InjectedClassNameProps } from "../utils/style"

export interface IconProps {
  className?: string
}

export type Icon = ComponentType<InjectedClassNameProps<IconProps>>
