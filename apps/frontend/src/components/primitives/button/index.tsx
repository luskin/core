import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/tailwind/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-br from-accent-10 to-accent-11 text-slate-1 hover:from-accent-11 hover:to-accent-11",
        secondary: "bg-slate-12 text-slate-1 hover:bg-slate-11",
        tertiary: "bg-accent-5 text-accent-11 hover:bg-accent-6",
        ghost: "border border-slate-7 text-slate-12 hover:border-slate-12",
        destructive: "bg-error-10 text-slate-1 hover:bg-error-11",
      },
      size: {
        lg: "px-6 py-[18px] font-bold leading-[14px] rounded-md",
        md: "p-3 text-xs font-semibold leading-3 rounded-md",
        sm: "p-2 text-xs font-semibold leading-3 rounded-md",
        xs: "px-1.5 py-1 font-semibold leading-3 text-[10px] rounded",
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
