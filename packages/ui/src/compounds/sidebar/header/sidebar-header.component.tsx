import { SidebarHeaderProps } from "./sidebar-header.props"

export default function SidebarHeader({ children }: SidebarHeaderProps) {
  return <div className="flex h-12 shrink-0 items-center">{children}</div>
}
