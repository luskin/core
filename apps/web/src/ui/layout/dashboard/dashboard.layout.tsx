import { PropsWithChildren } from "react"

export interface DashboardLayoutProps extends PropsWithChildren {}

export function DashboardLayout(props: DashboardLayoutProps) {
  return (
    <main className="flex flex-row w-full h-full bg-white">
      {props.children}
    </main>
  )
}
