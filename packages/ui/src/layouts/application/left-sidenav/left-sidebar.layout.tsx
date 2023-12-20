import { LeftSidebarLayoutProps } from "./left-sidebar.layout.props"

export default function LeftSidebarLayout(props: LeftSidebarLayoutProps) {
  const { sidebar } = props
  return (
    <div>
      <div>sidebar</div>
      <div>main</div>
    </div>
  )
}
