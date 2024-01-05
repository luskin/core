import { LucideIcon } from "lucide-react"

import { cn } from "../../utils"
import { buttonVariants } from "../../components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../components/tooltip"
import { Icon } from "../../icons/icon.props"
import { ResizablePanel } from "../../components/resizable"

interface NavProps {
  isCollapsable?: boolean
  isCollapsed?: boolean
  onCollapse?: () => void
  onExpand?: () => void
  links: Array<{
    title: string
    label?: string
    icon: Icon
    variant: "default" | "ghost"
  }>
}

export function Nav({
  links,
  isCollapsed = false,
  isCollapsable = true,
  onCollapse,
  onExpand,
}: NavProps) {
  return (
    <ResizablePanel
      defaultSize={15}
      collapsedSize={4}
      collapsible={isCollapsable}
      minSize={15}
      maxSize={20}
      onCollapse={onCollapse}
      onExpand={onExpand}
      className={cn(
        isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out"
      )}
    >
      <div
        className={cn(
          "flex h-[52px] items-center justify-center",
          isCollapsed ? "h-[52px]" : "px-2"
        )}
      >
        <p>Icon</p>
      </div>
      <div
        data-collapsed={isCollapsed}
        className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
      >
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map((link, index) =>
            isCollapsed ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <a
                    href="#"
                    className={cn(
                      buttonVariants({ variant: link.variant, size: "icon" }),
                      "h-9 w-9",
                      link.variant === "default" &&
                        "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.title}</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-muted-foreground">
                      {link.label}
                    </span>
                  )}
                </TooltipContent>
              </Tooltip>
            ) : (
              <a
                key={index}
                href="#"
                className={cn(
                  buttonVariants({ variant: link.variant, size: "sm" }),
                  link.variant === "default" &&
                    "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                  "justify-start"
                )}
              >
                <link.icon className="mr-2 h-4 w-4" />
                {link.title}
                {link.label && (
                  <span
                    className={cn(
                      "ml-auto",
                      link.variant === "default" &&
                        "text-background dark:text-white"
                    )}
                  >
                    {link.label}
                  </span>
                )}
              </a>
            )
          )}
        </nav>
      </div>
    </ResizablePanel>
  )
}
