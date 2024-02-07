import { stringUtils } from "@core/utils"
import clsx from "clsx"

export interface FlexProps {
  direction?: "row" | "col"
  children?: React.ReactNode
  justify?: "start" | "end" | "center" | "between" | "around"
  align?: "start" | "end" | "center" | "stretch"
  space?:
    | 0
    | 0.5
    | 1
    | 1.5
    | 2
    | 2.5
    | 3
    | 3.5
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 14
    | 16
    | 20
    | 24
    | 28
    | 32
    | 36
    | 40
    | 44
    | 48
    | 52
    | 56
    | 60
    | 64
    | 72
    | 80
    | 96
    | "px"
}

export function Flex({
  children,
  justify = "start",
  align = "start",
  space,
  direction = "row",
}: FlexProps) {
  const className = clsx(
    "flex",
    direction === "col" && "flex-col",
    space && `space-${direction === "col" ? "y" : "x"}-${space}`,
    `justify-${justify}`,
    `items-${align}`
  )

  return <div className={className}>{children}</div>
}
