import Link from "next/link"
import { Icon, IconName } from "../icon"
import { twMerge } from "tailwind-merge"
import { Paragraph } from "../typography"
import React from "react"

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
  ({ icon, label, href, isActive, disableHover, ...props }, ref) => {
    const className = twMerge(
      `inline-flex px-4 py-2 w-full items-center justify-start rounded-lg transition ease-in-out text-slate-6`,
      isActive ? "bg-slate-3 text-slate-12" : "bg-white",
      disableHover ? undefined : "hover:bg-slate-12 hover:text-slate-1"
    )
    return (
      <Link className={className} href={href} ref={ref} {...props}>
        <div className="w-4 h-4">
          {icon && (
            <Icon
              name={icon}
              className={twMerge(
                "w-4 h-4",
                isActive ? "text-slate-12" : "text-slate-6"
              )}
            />
          )}
        </div>
        <Paragraph size={"md"} variant={"secondary"} className="ml-2">
          {label}
        </Paragraph>
      </Link>
    )
  }
)
NavItem.displayName = "NavItem"

export { NavItem }
