import * as React from "react"
import * as TogglePrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/tailwind/utils"
import { Label, Paragraph } from "../typography"

interface ToggleProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof TogglePrimitives.Root>,
    "value" | "onChange" | "checked" | "onCheckedChange"
  > {
  offLabel: string | React.ReactNode
  onLabel: string | React.ReactNode
  toggled?: boolean
  onToggledChange?: (toggled: boolean) => void
}

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitives.Root>,
  ToggleProps
>(
  (
    { className, toggled, onLabel, offLabel, onToggledChange, ...props },
    ref
  ) => {
    const OffComponent = toggled ? Paragraph : Label
    const OnComponent = toggled ? Label : Paragraph

    return (
      <TogglePrimitives.Root
        className={cn(
          "peer inline-flex h-8 w-[97px] shrink-0 cursor-pointer items-center rounded-md border border-slate-7 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 relative",
          className
        )}
        {...props}
        onCheckedChange={onToggledChange}
        ref={ref}
      >
        <TogglePrimitives.Thumb
          className={cn(
            "pointer-events-none block h-7 w-[46.50px] rounded bg-black ring-0 transition-transform data-[state=checked]:translate-x-[47.5px] data-[state=unchecked]:translate-x-[1px]"
          )}
        />
        <OffComponent
          variant={toggled ? "primary" : "inverted"}
          size="md"
          className="flex justify-center items-center absolute top-0 left-0 h-full w-1/2"
        >
          {offLabel}
        </OffComponent>
        <OnComponent
          variant={toggled ? "inverted" : "primary"}
          size="md"
          className="flex justify-center items-center absolute top-0 right-0 h-full w-1/2"
        >
          {onLabel}
        </OnComponent>
      </TogglePrimitives.Root>
    )
  }
)
Toggle.displayName = TogglePrimitives.Root.displayName

export { Toggle }
