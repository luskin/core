import React from "react"
import * as Icons from "./svgs"

type IconName = keyof typeof Icons

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
  className?: string
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, children, name, ...props }, ref) => {
    const IconComponent = Icons[name]

    if (!IconComponent) {
      console.error(`Icon with name "${name}" does not exist.`)
      return null // Or render a fallback component
    }
    return <IconComponent ref={ref} className={className} {...props} />
  }
)
Icon.displayName = "Icon"

export { Icon }
export type { IconName, IconProps }
