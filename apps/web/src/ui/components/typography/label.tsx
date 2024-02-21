import React from "react"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/tailwind/utils"
import { Slot } from "@radix-ui/react-slot"

const labelVariants = cva("font-semibold", {
  variants: {
    variant: {
      primary: "text-slate-12",
      secondary: "text-slate-11",
      inverted: "text-white",
      destructive: "text-error-12",
    },
    size: {
      lg: "text-sm leading-4",
      md: "text-xs leading-3",
      sm: "text-[10px] leading-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
})

export interface LabelProps
  extends React.HTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  asChild?: boolean
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "label"
    return (
      <Comp
        className={cn(labelVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Label.displayName = "Label"

export { Label, labelVariants }
