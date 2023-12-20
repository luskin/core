import { PropsWithChildren } from "react"
import { SizeProps } from "@styles"

export interface ButtonProps
  extends PropsWithChildren,
    SizeProps<"small" | "base" | "large"> {
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "warning"
    | "success"
  disabled?: boolean
  onClick?: () => void
}
