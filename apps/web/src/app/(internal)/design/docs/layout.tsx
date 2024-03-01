"use client"
import { usePathname } from "next/navigation"
import { PropsWithChildren, useMemo } from "react"
import { createDesignSideNavComponentRoutes } from "./routes"
import { Nav, NavItem } from "@/ui/components/nav"
import { Column } from "@/ui/layout/flex"

export default function Layout({ children }: PropsWithChildren) {
  const currentPath = usePathname()
  const componentRoutes = useMemo(
    () => createDesignSideNavComponentRoutes(),
    []
  )
  return (
    <div>
      <Nav>
        <Column className={"overflow-y-scroll w-full"}>
          {componentRoutes.map((routeProps) => {
            const isActive = currentPath.startsWith(routeProps.href)
            return (
              <NavItem
                key={routeProps.href}
                {...routeProps}
                isActive={isActive}
              />
            )
          })}
        </Column>
      </Nav>
      {children}
    </div>
  )
}
