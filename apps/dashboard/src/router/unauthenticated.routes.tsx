import { Route, redirect } from "@tanstack/react-router"
import { rootRoute } from "./root.route"
import LoginPage from "@/views/auth/login"
import Auth from "@/libs/auth"

const unauthenticatedRoute = new Route({
  getParentRoute: () => rootRoute,
  id: "unauthenticated",
  beforeLoad: () => {
    if (Auth.identity) {
      throw redirect({
        to: "/",
      })
    }
  },
})

export const loginRoute = new Route({
  getParentRoute: () => unauthenticatedRoute,
  path: "/login",
  validateSearch: (search?: Record<string, string>): { redirect?: string } => {
    return {
      redirect: search?.redirect,
    }
  },
  component: LoginPage,
})

export const unauthenticatedRoutes = [unauthenticatedRoute, loginRoute]
