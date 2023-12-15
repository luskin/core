import { ReactNode } from "react"
import Sidebar from "../../components/SideBar"

type Props = {
  children: ReactNode
}

const layout = (props: Props) => {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <main className="w-full">{props.children}</main>
    </div>
  )
}

export default layout
