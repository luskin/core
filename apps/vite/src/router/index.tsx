import { Router } from "@tanstack/react-router"
import { rootRoute } from "./root.route.js"
import { unauthenticatedRoutes } from "./unauthenticated.routes.js"
import Config from "@/config"
import { authenticatedRoutes } from "./authenticated.router.js"

const routeTree = rootRoute.addChildren([
  ...unauthenticatedRoutes,
  ...authenticatedRoutes,
])

const router = new Router({
  routeTree,
  context: {
    queryClient: Config.queryClient,
  },
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
})

export default router

/**
 * This is how type inference works.
 */
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
