"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/tailwind/utils"
import { Label, Paragraph } from "../typography"
import { Row } from "@/ui/layout/flex"

interface RadioItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label: string
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioItemProps
>(({ className, checked, value, label, ...props }, ref) => {
  return (
    <Row gap={2}>
      <RadioGroupPrimitive.Item
        ref={ref}
        value={value}
        checked={checked}
        className={cn(
          "aspect-square h-4 w-4 rounded-full border border-slate-7 text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className="h-2.5 w-2.5 fill-black text-current" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      {checked ? (
        <Label size={"lg"}>{label}</Label>
      ) : (
        <Paragraph size={"lg"}>{label}</Paragraph>
      )}
    </Row>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

interface RadioProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  defaultValue?: string
  options: Array<{ value: string; label: string }>
}

const Radio = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioProps
>(({ className, options, defaultValue, value, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      defaultValue={defaultValue}
      ref={ref}
    >
      {options.map((option) => (
        <RadioGroupItem
          key={option.value}
          value={option.value}
          label={option.label}
          checked={option.value === value}
        />
      ))}
    </RadioGroupPrimitive.Root>
  )
})
Radio.displayName = RadioGroupPrimitive.Root.displayName

export { Radio }
export type { RadioProps }
