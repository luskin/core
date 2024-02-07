import Link from "next/link"
import { Icon, IconName } from "../icon"
import { twMerge } from "tailwind-merge"
export interface NavItemProps {
  isActive?: boolean
  icon?: IconName
  disableHover?: boolean
  label?: string
  href: string
}

export function NavItem({
  icon,
  label,
  href,
  isActive,
  disableHover,
}: NavItemProps) {
  console.log("The current path is: ", href, isActive)
  const className = twMerge(
    `inline-flex px-4 py-2 items-center justify-start rounded-lg transition ease-in-out text-slate-6`,
    isActive ? "bg-slate-3 text-slate-12" : "bg-white",
    disableHover ? undefined : "hover:bg-slate-4 hover:text-slate-12"
  )
  return (
    <Link className={className} href={href}>
      <div className="w-4 h-4">
        {icon && (
          <Icon
            name={icon}
            className={twMerge(
              "w-4 h-4",
              isActive ? "text-slate-12" : undefined
            )}
          />
        )}
      </div>
      <div className="ml-4">{label}</div>
    </Link>
  )
}
