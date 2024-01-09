import auth from "@/libs/auth"
import {
  Button,
  Nav,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  TooltipProvider,
} from "@core/ui"
import { User } from "@core/ui/src/icons"
import { Outlet } from "@tanstack/react-router"
import { useState } from "react"

export default function ApplicationLayout() {
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
          className="h-full items-stretch"
        >
          <Button onClick={() => auth.signOut()}>Sign Out</Button>
          <Nav
            isCollapsed={isCollapsed}
            onCollapse={() => setIsCollapsed(true)}
            onExpand={() => setIsCollapsed(false)}
            links={[
              {
                title: "Ship",
                label: "128",
                icon: User,
                variant: "default",
              },
              {
                title: "Track",
                label: "9",
                icon: User,
                variant: "ghost",
              },
              {
                title: "Billing",
                label: "",
                icon: User,
                variant: "ghost",
              },
              {
                title: "People",
                label: "23",
                icon: User,
                variant: "ghost",
              },
              {
                title: "Claims",
                label: "",
                icon: User,
                variant: "ghost",
              },
              {
                title: "Coverage",
                label: "",
                icon: User,
                variant: "ghost",
              },
              {
                title: "Reporting",
                label: "",
                icon: User,
                variant: "ghost",
              },
              {
                title: "Support",
                label: "",
                icon: User,
                variant: "ghost",
              },
            ]}
          />
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={85} minSize={30}>
            <div className="flex-col items-center px-4 py-2">
              <h1 className="text-xl font-bold">Inbox</h1>
              <Outlet />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </div>
  )
}
