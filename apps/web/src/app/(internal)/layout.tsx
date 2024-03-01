import { AdminBoundary } from "@/ui/boundaries/admin.boundary"
import { PropsWithChildren } from "react"
import AppBarLayout from "../_layouts/app-bar.layout"
import AppBar from "../_appbar"
import { Footer } from "@/ui/layout/footer"

export default function DesignLayout(props: PropsWithChildren) {
  return (
    <AppBarLayout appBar={<AppBar />} footer={<Footer />}>
      <AdminBoundary redirectOnFailHref="/not-found" {...props} />
    </AppBarLayout>
  )
}
