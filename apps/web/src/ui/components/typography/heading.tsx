import React, { PropsWithChildren } from "react"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/tailwind/utils"
import { Slot } from "@radix-ui/react-slot"
import { brandFont } from "@/lib/fonts/brand.font"

const headingVariants = cva("mt-0", {
  variants: {
    variant: {
      primary: "text-slate-12",
      secondary: "text-slate-11",
      inverted: "text-slate-1",
      destructive: "text-error-12",
      colorless: "",
    },
    size: {
      xl: `text-3xl leading-[35px] tracking-[-1.6px] font-medium ${brandFont.className}`,
      lg: "text-[28px] tracking-[-0.55px] leading-6 font-bold",
      md: "text-xl tracking-[-0.25px] leading-[14px] font-bold",
      sm: "text-sm tracking-[-0.25px] leading-[14px] font-bold",
      xs: "text-xs font-bold",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
})

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean
}

function sizeToHeading(
  size?: "xl" | "lg" | "md" | "sm" | "xs" | null
): "h1" | "h2" | "h3" | "h4" | "h5" {
  switch (size) {
    case "xl":
      return "h1"
    case "lg":
      return "h2"
    case "md":
      return "h3"
    case "sm":
      return "h4"
    case "xs":
      return "h5"
    default:
      throw new Error(`Invalid heading size: ${size}`)
  }
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, size = "sm", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : sizeToHeading(size)
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
