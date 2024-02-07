import React from "react"
import * as Icons from "./svgs"

export type IconName = keyof typeof Icons

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
  className?: string
}

export const Icon: React.FC<IconProps> = ({ name, className }: IconProps) => {
  const IconComponent = Icons[name]

  if (!IconComponent) {
    console.error(`Icon with name "${name}" does not exist.`)
    return null // Or render a fallback component
  }

  return <IconComponent className={className} />
}
