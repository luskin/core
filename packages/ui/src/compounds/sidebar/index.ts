import Sidebar from "./sidebar.component"
import Item from "./item/sidebar-item.component"

// Attach Item as a static property of Sidebar
Sidebar.Item = Item

export { Sidebar }

// Re-export types if needed
export type { SidebarProps } from "./sidebar.props"
