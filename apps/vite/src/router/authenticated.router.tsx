import { Route, redirect } from "@tanstack/react-router"
import { rootRoute } from "./root.route.js"
import ShipPage from "@/views/ship"
import ApplicationLayout from "@/layouts/application.layout"
import ShipLtlPage from "@/views/ship/ltl"
import ShipLtlIdPage from "@/views/ship/ltl/$id"
import Auth from "@/libs/auth"

const authenticatedRoute = new Route({
  getParentRoute: () => rootRoute,
  id: "authenticated",
  beforeLoad: () => {
    const identity = Auth.identity
    if (!identity) {
      throw redirect({
        to: "/login",
        search: {
          // Use the current location to power a redirect after login
          // (Do not use `router.state.resolvedLocation` as it can
          // potentially lag behind the actual current location)
          redirect: location.href,
        },
      })
    }
    return {
      identity,
    }
  },
  component: ApplicationLayout,
})

const shipRoute = new Route({
  getParentRoute: () => authenticatedRoute,
  path: "/ship",
  component: ShipPage,
})

const shipLtlRoute = new Route({
  getParentRoute: () => authenticatedRoute,
  path: "/ship/ltl",
  component: ShipLtlPage,
})

const shipLtlIdRoute = new Route({
  getParentRoute: () => authenticatedRoute,
  path: "/ship/ltl/$id",
  component: ShipLtlIdPage,
})

export const authenticatedRoutes = [
  authenticatedRoute,
  shipRoute,
  shipLtlRoute,
  shipLtlIdRoute,
]
