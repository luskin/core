import Link from "next/link"
import { Icon, IconName } from "../icon"
import { Label, Paragraph } from "../typography"
import React from "react"
import { cn } from "@/lib/tailwind/utils"

export interface NavItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean
  icon?: IconName
  label?: string
  href: string
  isActive?: boolean
  disableHover?: boolean
}

const NavItem = React.forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ icon, label, href, isActive, disableHover = false, ...props }, ref) => {
    const className = cn(
      `flex flex-row justify-start items-center h-10 px-4 w-full rounded-lg transition ease-in-out`,
      isActive && "bg-slate-6",
      !disableHover && "hover:bg-slate-3"
    )
    return (
      <Link className={className} href={href} ref={ref} {...props}>
        {icon && (
          <Icon
            name={icon}
            className={cn("h-4", isActive ? "text-slate-12" : "text-slate-8")}
          />
        )}
        <Label
          size={"md"}
          variant={isActive ? "primary" : "secondary"}
          className={cn(icon && "ml-4")}
        >
          {label}
        </Label>
      </Link>
    )
  }
)
NavItem.displayName = "NavItem"

export { NavItem }
