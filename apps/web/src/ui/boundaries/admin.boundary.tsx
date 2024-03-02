import NotFound from "@/app/not-found"
import { firebaseServer } from "@/lib/auth/firebase.server"
import { redirect } from "next/navigation"
import { PropsWithChildren } from "react"

interface AdminBoundaryProps extends PropsWithChildren {
  redirectOnFailHref?: string
}

export async function AdminBoundary(props: AdminBoundaryProps) {
  const { children, redirectOnFailHref } = props
  const user = await firebaseServer.getCurrentUser()
  if (user?.email?.endsWith("@mothership.com")) {
    return <>{children}</>
  } else {
    if (redirectOnFailHref) {
      redirect(redirectOnFailHref)
    }
  }
}
