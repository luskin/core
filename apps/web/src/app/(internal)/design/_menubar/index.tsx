"use client"
import { Nav, NavItem } from "@/ui/components/nav"
import { Column } from "@/ui/layout/flex"
import { usePathname } from "next/navigation"
import { useMemo } from "react"
import { createDesignSideNavComponentRoutes } from "./routes"

export default function DesignMenuBar() {
  const currentPath = usePathname()
  const componentRoutes = useMemo(
    () => createDesignSideNavComponentRoutes(),
    []
  )
  return (
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
  )
}
