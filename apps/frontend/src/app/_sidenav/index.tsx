"use client"
import { Nav, NavItem } from "@/components/primitives/nav"
import { usePathname } from "next/navigation"
import { createSideNavRoutes } from "./routes"
import { useMemo } from "react"

export function SideNav() {
  const currentPath = usePathname()
  console.log("The current path is: ", currentPath)
  const routes = useMemo(() => createSideNavRoutes(), [])
  return (
    <Nav>
      {routes.map((routeProps) => {
        const isActive =
          currentPath === "/"
            ? currentPath === routeProps.href
            : routeProps.href !== "/" && currentPath.startsWith(routeProps.href)

        return (
          <NavItem key={routeProps.href} {...routeProps} isActive={isActive} />
        )
      })}
    </Nav>
  )
}
