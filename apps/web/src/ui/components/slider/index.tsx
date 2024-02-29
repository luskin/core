"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/tailwind/utils"

export type SliderProps = React.ComponentPropsWithoutRef<
  typeof SliderPrimitive.Root
> & {
  thumbs?: number
  canOverlapThumbs?: boolean
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, thumbs = 1, canOverlapThumbs, value, ...props }, ref) => {
  // Ensure the number of thumbs matches the length of the value array
  if (thumbs !== value?.length) {
    throw new Error(
      `Expected the number of thumbs to match the length of the value array. Received ${thumbs} thumbs and ${value?.length} values.`
    )
  }

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      value={value}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-slate-7">
        <SliderPrimitive.Range className="absolute h-full bg-success-9" />
      </SliderPrimitive.Track>
      {Array.from({ length: thumbs }).map((_, i) => (
        <SliderPrimitive.Thumb
          key={i}
          className="block h-6 w-6 rounded-full border-2 border-slate-12 bg-slate-1 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
