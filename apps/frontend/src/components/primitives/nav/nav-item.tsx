import Link from "next/link"
import { Icon, IconName } from "../icon"
export interface NavItemProps {
  isActive?: boolean
  icon?: IconName
  label?: string
  href: string
}

export function NavItem({ icon, label, href, isActive }: NavItemProps) {
  console.log("The current path is: ", href, isActive)
  return (
    <Link
      className={`inline-flex px-4 py-2 items-center justify-start transition ease-in-out  hover:bg-slate-5 ${
        isActive ? "bg-slate-3" : "bg-white"
      } rounded-lg`}
      href={href}
    >
      <div className="w-4 h-4">
        {icon && <Icon name={icon} className="w-4 h-4" />}
      </div>
      <div className="ml-4">{label}</div>
    </Link>
  )
}
