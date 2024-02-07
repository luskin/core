import { PropsWithChildren } from "react"

export interface NavProps extends PropsWithChildren {
  isCollapsed?: boolean
}

export function Nav({ isCollapsed, children }: NavProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 px-2 py-2 data-[collapsed=true]:py-2 w-[232px]"
    >
      <nav className="grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {children}
      </nav>
    </div>
  )
}
