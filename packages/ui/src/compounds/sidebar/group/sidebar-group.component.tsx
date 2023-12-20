import { SidebarGroupProps } from "./sidebar-group.props"

export default function SidebarGroup({ label, children }: SidebarGroupProps) {
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          {label && (
            <div className="text-xs font-semibold leading-6 text-gray-400">
              {label}
            </div>
          )}
          <ul role="list" className="space-y-1">
            {children}
          </ul>
        </li>
      </ul>
    </nav>
  )
}
