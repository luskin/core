"use client"
import { Nav, NavItem } from "@/components/primitives/nav"
import { usePathname } from "next/navigation"
import { createSideNavRoutes } from "./routes"
import { useMemo } from "react"
import { Column } from "@/components/layout/flex"

export function SideNav() {
  const currentPath = usePathname()
  const routes = useMemo(() => createSideNavRoutes(), [])
  return (
    <Nav>
      <Column className={"overflow-y-scroll w-full"}>
        {routes.map((routeProps) => {
          const isActive =
            currentPath === "/"
              ? currentPath === routeProps.href
              : routeProps.href !== "/" &&
                currentPath.startsWith(routeProps.href)

          return (
            <NavItem
              key={routeProps.href}
              {...routeProps}
              isActive={isActive}
            />
          )
        })}
      </Column>

      <Column className={"mt-auto"}>
        <NavItem href="/same-day-coverage" label="Same-day coverage" />
      </Column>
    </Nav>
  )
}
