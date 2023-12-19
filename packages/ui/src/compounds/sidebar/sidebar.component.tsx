import { SidebarProps } from "./sidebar.props"
import Item from "./item/sidebar-item.component" // Assuming this is the correct path

const Sidebar = ({ children, collapsed }: SidebarProps) => {
  const classNames = ["flex flex-col h-full bg-black text-white"]
  if (collapsed) {
    classNames.push("w-12")
  } else {
    classNames.push("w-64")
  }

  return <section className={classNames.join(" ")}>{children}</section>
}

// Assign Item as a static property of Sidebar
Sidebar.Item = Item

export default Sidebar
