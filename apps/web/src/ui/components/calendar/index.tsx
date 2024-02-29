"use client"

import * as React from "react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/tailwind/utils"
import { buttonVariants } from "../button"
import { Icon } from "../icon"
import { labelVariants } from "../typography/label"
import { paragraphVariants } from "../typography/paragraph"
import { headingVariants } from "../typography/heading"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  numberOfMonths = 1,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      numberOfMonths={numberOfMonths}
      className={cn(
        "border border-slate-7 rounded-2xl overflow-hidden shadow",
        className
      )}
      classNames={{
        months: "flex flex-col sm:flex-row",
        month: cn(
          "space-y-0",
          numberOfMonths > 1 ? "first:border-r first:border-slate-9" : ""
        ),
        caption: "flex justify-center relative items-center bg-slate-3 py-4",
        caption_label: cn(
          labelVariants({
            size: "md",
          }),
          "text-slate-12"
        ),
        nav: "space-x-1 flex items-center",
        nav_button:
          "flex items-center h-7 w-7 bg-transparent p-0 opacity-100 hover:opacity-50",
        nav_button_previous: "absolute left-4 justify-start",
        nav_button_next: "absolute right-4 justify-end",
        table: "w-full border-collapse space-y-1",
        head_row: "flex bg-slate-3 px-2 pb-2",
        head_cell: cn(
          labelVariants({
            size: "md",
          }),
          "text-muted-foreground rounded-md w-9"
        ),
        row: "flex w-full mt-2 mb-2 px-2",
        cell: "flex items-center justify-center h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          paragraphVariants({ size: "md", variant: "colorless" }),
          "w-full h-full rounded-md hover:bg-slate-3 aria-selected:bg-slate-12"
        ),
        day_selected: cn(
          headingVariants({
            size: "sm",
            variant: "inverted",
          }),
          "!text-slate-1 !text-sm"
        ),
        day_outside: "text-slate-9 hover:bg-transparent",
        // day_disabled: "text-slate-9",
        day_range_start: "rounded-tr-none rounded-br-none",
        day_range_end: "rounded-tl-none rounded-bl-none",
        day_today: cn(
          headingVariants({
            size: "sm",
            variant: "primary",
          }),
          "!text-sm"
        ),
        day_range_middle: "rounded-none",
        day_hidden: "invisible",
        multiple_months: "",

        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <Icon name="arrow" className="h-4 w-4" />,
        IconRight: ({ ...props }) => (
          <Icon name="arrow" className="h-4 w-4 transform scale-x-[-1]" />
        ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
