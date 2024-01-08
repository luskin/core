import { SidebarItemProps } from "./sidebar-item.props"
import { joinDefinedBySpace } from "@core/utils/string"

export default function SidebarItem(props: SidebarItemProps) {
  const { children, icon: Icon, onClick, isSelected } = props

  return (
    <div
      className={joinDefinedBySpace(
        isSelected
          ? "bg-gray-800 text-white"
          : "text-gray-400 hover:text-white hover:bg-[#333]",
        "group flex gap-x-4 rounded-md px-4 h-9 text-sm leading-5 font-semibold text-[#757575] group-hover:text-white items-center"
      )}
    >
      {Icon && <Icon className="h-3 w-3 shrink-0" />}
      {children}
    </div>
  )
}
