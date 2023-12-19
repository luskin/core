import { SideNav } from "../components/sidenav"

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full">
      <SideNav />
      <div className="flex flex-col flex-1">{children}</div>
    </div>
  )
}
