import React from "react"
import { Icon, IconName } from "../icon"
import { cn } from "@/lib/tailwind/utils"

interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  iconName?: IconName
  className?: string
  size?: "sm" | "md" | "lg"
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, iconName = "spinner", size = "md" }, ref) => {
    let sizeClass = "h-6 w-6"

    if (size === "sm") {
      sizeClass = "h-4 w-4"
    } else if (size === "lg") {
      sizeClass = "h-8 w-8"
    }

    return (
      <Icon
        ref={ref}
        name={iconName}
        className={cn(className, sizeClass, "animate-spin")}
      />
    )
  }
)
Spinner.displayName = "Spinner"

export { Spinner }
export type { SpinnerProps }
