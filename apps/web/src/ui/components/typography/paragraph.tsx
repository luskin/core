import React from "react"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/tailwind/utils"
import { Slot } from "@radix-ui/react-slot"

const paragraphVariants = cva("", {
  variants: {
    variant: {
      primary: "text-slate-12",
      secondary: "text-slate-11",
      inverted: "text-slate-1",
      destructive: "text-error-12",
      colorless: "",
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

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  asChild?: boolean
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p"
    return (
      <Comp
        className={cn(paragraphVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Paragraph.displayName = "Paragraph"

export { Paragraph, paragraphVariants }
