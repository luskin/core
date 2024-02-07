import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/tailwind/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-br from-emerald-700 to-emerald-800 text-primary-foreground text",
        secondary: "bg-neutral-800 text-neutral-50 hover:bg-neutral-500",
        tertiary: "bg-emerald-100 text-emerald-800 hover:bg-emerald-200",
        ghost:
          "border border-gray-300 text-neutral-800 hover:border-neutral-800",
        destructive: "bg-red-500 text-neutral-50 hover:bg-red-600",
      },
      size: {
        lg: "px-6 py-[18px] font-bold leading-[14px]",
        md: "p-3 text-xs font-semibold leading-3",
        sm: "p-2 text-xs font-semibold leading-3",
        xs: "px-1.5 py-1 font-semibold leading-3 text-[10px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
