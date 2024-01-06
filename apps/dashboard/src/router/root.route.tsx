import Auth from "@/libs/auth"
import { QueryClient } from "@tanstack/react-query"
import { Outlet, rootRouteWithContext } from "@tanstack/react-router"

export const rootRoute = rootRouteWithContext<{
  queryClient: QueryClient
}>()({
  beforeLoad: async () => {
    // This is where you would load any data that is needed for the entire app
    // (e.g. user identity, global settings, etc.)
    await Auth.ready()
    return {
      identity: Auth.identity,
    }
  },
  component: RootComponent,
})

function RootComponent() {
  return <Outlet />
}
