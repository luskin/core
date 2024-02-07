import Link from "next/link"
import { Icon, IconName } from "../icon"

export interface NavItemProps {
  icon?: IconName
  label?: string
  href: string
}

export function NavItem({ icon, label, href }: NavItemProps) {
  return (
    <Link
      className="inline-flex px-4 py-2 items-center justify-start transition ease-in-out bg-white  hover:bg-slate-3 rounded-lg"
      href={href}
    >
      <div className="w-4 h-4">
        {icon && <Icon name={icon} className="w-4 h-4" />}
      </div>
      <div className="ml-4">{label}</div>
    </Link>
  )
}
