import { SidebarProps } from "./sidebar.props"
import Item from "./item/sidebar-item.component"
import Header from "./header/sidebar-header.component"
import Group from "./group/sidebar-group.component"

const Sidebar = ({ children, collapsed }: SidebarProps) => {
  const classNames = ["flex flex-col h-full bg-black text-white"]
  if (collapsed) {
    classNames.push("w-12")
  } else {
    classNames.push("w-64")
  }

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-2">
      {children}
    </div>
  )
}

Sidebar.Item = Item
Sidebar.Header = Header
Sidebar.Group = Group

export default Sidebar
