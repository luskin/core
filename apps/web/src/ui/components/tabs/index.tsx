"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/tailwind/utils"
import { Label, Paragraph } from "../typography"

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("flex justify-center items-center", className)}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center h-6 data-[state=active]:bg-slate-12 data-[state=active]:text-slate-1 data-[state=active]:shadow-sm rounded px-4",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

type TabProps<T = string> = {
  label: string
  disabled?: boolean
  value: T
}

type TabsProps<T = string> = {
  tabs: Array<TabProps<T>>
  value?: T
  onValueChange?: (value: T) => void
}

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ value, onValueChange, ...props }, ref) => {
  if (value && !props.tabs.find((tab) => tab.value === value)) {
    throw new Error(
      `The value "${value}" does not match any of the tab values: ${props.tabs
        .map((tab) => tab.value)
        .join(", ")}`
    )
  }
  const list = React.useMemo(
    () =>
      props.tabs.map((tab) => (
        <TabsTrigger key={tab.value} disabled={tab.disabled} value={tab.value}>
          {tab.value === value ? (
            <Label size="md" variant={"inverted"}>
              {tab.label}
            </Label>
          ) : (
            <Paragraph size="md">{tab.label}</Paragraph>
          )}
        </TabsTrigger>
      )),
    [props.tabs, value]
  )
  return (
    <TabsPrimitive.Root
      ref={ref}
      defaultValue={value}
      onValueChange={onValueChange}
      className="bg-slate-3 rounded-md p-[2px] h-7"
    >
      <TabsList>{list}</TabsList>
    </TabsPrimitive.Root>
  )
})

export { Tabs }
export type { TabsProps, TabProps }

//  whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
