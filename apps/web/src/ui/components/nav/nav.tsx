import { Column } from "@/ui/layout/flex"
import { PropsWithChildren } from "react"

export interface NavProps extends PropsWithChildren {
  isCollapsed?: boolean
}

export function Nav({ isCollapsed, children }: NavProps) {
  return <Column className="px-2 py-2 w-[232px] h-full">{children}</Column>
}
