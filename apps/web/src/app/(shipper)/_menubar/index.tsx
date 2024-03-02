"use client"
import { Nav, NavItem } from "@/ui/components/nav"
import { usePathname } from "next/navigation"
import { createMenuBarRoutes } from "./routes"
import { useMemo } from "react"
import { Column } from "@/ui/layout/flex"

export function MenuBar() {
  const currentPath = usePathname()
  const routes = useMemo(() => createMenuBarRoutes(), [])
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
        <NavItem
          href="/same-day-coverage"
          label="Same-day coverage"
          icon="truckSideRight"
        />
      </Column>
    </Nav>
  )
}
