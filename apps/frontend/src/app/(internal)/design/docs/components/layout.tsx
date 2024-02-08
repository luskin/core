import { Heading } from "@/ui/components/typography"
import { PropsWithChildren } from "react"

export default function ComponentPageLayout({ children }: PropsWithChildren) {
  return <div className="w-full">{children}</div>
}
