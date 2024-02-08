import React, { PropsWithChildren } from "react"

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
      lg: "text-sm",
      md: "text-xs",
      sm: "text-[10px]",
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
  ({ className, variant, size, asChild = false, ...props }) => {
    const Comp = asChild ? Slot : "label"
    return (
      <Comp
        className={cn(labelVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Label.displayName = "Label"

export { Label, labelVariants }
