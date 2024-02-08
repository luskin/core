import React, { PropsWithChildren } from "react"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/tailwind/utils"
import { Slot } from "@radix-ui/react-slot"
import { brandFont } from "@/lib/fonts/brand.font"

const headingVariants = cva("font-bold mt-0", {
  variants: {
    variant: {
      primary: "text-slate-12",
      secondary: "text-slate-11",
      inverted: "text-white",
      destructive: "text-error-12",
    },
    size: {
      h1: `text-[33px] leading-[38.86px] tracking-[-1.6px] ${brandFont.className}`,
      h2: "text-xl tracking-[-0.55px] leading-6",
      h3: "text-sm tracking-[-0.25px] leading-[14px]",
      h4: "text-xs tracking-[-0.25px] leading-[14px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "h4",
  },
})

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, size = "h4", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : (size as "h1" | "h2" | "h3" | "h4")
    return (
      <Comp
        className={cn(headingVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export { Heading, headingVariants }
