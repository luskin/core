import { AdminBoundary } from "@/ui/boundaries/admin.boundary"
import { PropsWithChildren } from "react"

export default function DesignLayout(props: PropsWithChildren) {
  return <AdminBoundary redirectOnFailHref="/not-found" {...props} />
}
