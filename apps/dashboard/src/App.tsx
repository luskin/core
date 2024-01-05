import { Nav, TooltipProvider } from "@repo/ui"
import { User } from "@repo/ui/src/icons"
import { useState } from "react"

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <div className="flex w-full h-screen">
      <div className="w-56 h-full">
        <TooltipProvider delayDuration={0}>
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Inbox",
                label: "128",
                icon: User,
                variant: "default",
              },
              {
                title: "Drafts",
                label: "9",
                icon: User,
                variant: "ghost",
              },
              {
                title: "Sent",
                label: "",
                icon: User,
                variant: "ghost",
              },
              {
                title: "Junk",
                label: "23",
                icon: User,
                variant: "ghost",
              },
              {
                title: "Trash",
                label: "",
                icon: User,
                variant: "ghost",
              },
              {
                title: "Archive",
                label: "",
                icon: User,
                variant: "ghost",
              },
            ]}
          />
        </TooltipProvider>
      </div>
      <div className="flex flex-1 h-full">This is the application</div>
    </div>
  )
}

export default App
