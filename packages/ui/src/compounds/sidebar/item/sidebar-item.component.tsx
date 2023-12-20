import { SidebarItemProps } from "./sidebar-item.props"
import { joinDefinedBySpace } from "@repo/utils/string"

export default function SidebarItem(props: SidebarItemProps) {
  const { children, icon: Icon, onClick, isSelected } = props

  return (
    <div
      className={joinDefinedBySpace(
        isSelected
          ? "bg-gray-800 text-white"
          : "text-gray-400 hover:text-white hover:bg-[#333]",
        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-[#757575] group-hover:text-white"
      )}
    >
      {Icon && <Icon className="h-6 w-6 shrink-0" />}
      {children}
    </div>
  )
}
