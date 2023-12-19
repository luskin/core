import { SidebarItemProps } from "./sidebar-item.props"

export default function SidebarItem(props: SidebarItemProps) {
  const { children, icon, onClick, isSelected } = props
  const baseClasses =
    "px-4 py-3 flex items-center text-sm font-medium cursor-pointer"
  const inactiveClasses = "text-gray-300 hover:text-white hover:bg-gray-700"
  const activeClasses = "text-white bg-gray-800"

  return (
    <div
      className={`${baseClasses} ${
        isSelected ? activeClasses : inactiveClasses
      }`}
      onClick={onClick}
    >
      {icon}
      <span>{children}</span>
    </div>
  )
}
