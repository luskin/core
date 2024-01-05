import {
  Nav,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  Separator,
  TooltipProvider,
} from "@repo/ui"
import { User } from "@repo/ui/src/icons"
import { cn } from "@repo/ui/src/utils"
import { useState } from "react"

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="flex w-full h-screen">
      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          onLayout={(sizes: number[]) => {
            document.cookie = `react-resizable-panels:layout=${JSON.stringify(
              sizes
            )}`
          }}
          className="h-full max-h-[800px] items-stretch"
        >
          <ResizablePanel
            defaultSize={undefined}
            collapsedSize={30}
            collapsible={true}
            minSize={15}
            maxSize={20}
            onCollapse={(): void => {
              setIsCollapsed(true)
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                true
              )}`
            }}
            onExpand={(): void => {
              setIsCollapsed(false)
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                false
              )}`
            }}
            className={cn(
              isCollapsed &&
                "min-w-[50px] transition-all duration-300 ease-in-out"
            )}
          >
            <div
              className={cn(
                "flex h-[52px] items-center justify-center",
                isCollapsed ? "h-[52px]" : "px-2"
              )}
            >
              <p>ACCOUNT SWITCHER HERE</p>
            </div>
            <Separator />
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
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={80} minSize={30}>
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Inbox</h1>
              <p>something here</p>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={30}>
            <p>Something else here</p>
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </div>
  )
}

export default App
