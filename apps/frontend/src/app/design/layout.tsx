import { Header } from "@/ui/layout/header"
import { Footer } from "@/ui/layout/footer"
import { PropsWithChildren } from "react"

export default function DesignLayout(props: PropsWithChildren) {
  return <div>{props.children}</div>
}
