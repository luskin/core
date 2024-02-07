import React from "react"
import * as Icons from "./svgs"
import Image from "next/image"

export type IconName = keyof typeof Icons

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
  alt?: string
}

export const Icon: React.FC<IconProps> = ({ name, alt }) => {
  return <Image priority src={Icons[name]} alt={alt ?? name} />
}
