import { stringUtils } from "@core/utils"

export interface FlexProps {
  direction?: "row" | "col"
  children?: React.ReactNode
  justify?: "start" | "end" | "center" | "between" | "around"
  align?: "start" | "end" | "center" | "stretch"
  space?: number
}

export function Flex({
  children,
  justify = "start",
  align = "start",
  space,
  direction = "row",
}: FlexProps) {
  const className = ["flex"]
  if (direction === "col") {
    className.push("flex-col")
  }
  if (space) {
    className.push(`space-${direction === "col" ? "y" : "x"}-${space}`)
  }
  if (justify) {
    className.push(`justify-${justify}`)
  }
  if (align) {
    className.push(`items-${align}`)
  }
  return (
    <div className={stringUtils.joinDefinedBySpace(...className)}>
      {children}
    </div>
  )
}
