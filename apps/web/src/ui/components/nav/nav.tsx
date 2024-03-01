import { Column } from "@/ui/layout/flex"
import { PropsWithChildren } from "react"

export interface NavProps extends PropsWithChildren {
  isCollapsed?: boolean
}

export function Nav({ isCollapsed, children }: NavProps) {
  return <Column className="px-4 py-4 h-full w-full">{children}</Column>
}
