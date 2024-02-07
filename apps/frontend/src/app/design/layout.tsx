import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PropsWithChildren } from "react"

export default function DesignLayout(props: PropsWithChildren) {
  return <div>{props.children}</div>
}
