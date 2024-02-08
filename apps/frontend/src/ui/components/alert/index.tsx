import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/tailwind/utils"
import { IconName } from "../icon"
import { Label, Paragraph } from "../typography"

const alertVariants = cva(
  "w-full rounded-lg border p-4 flex flex-col justify-center items-start gap-1",
  {
    variants: {
      variant: {
        warning: "bg-warning-4 border-warning-10",
        error: "bg-error-5 border-error-10",
        info: "bg-slate-1 border-slate-3",
        success: "bg-accent-5 border-accent-10",
      },
    },
    defaultVariants: {
      variant: "warning",
    },
  }
)

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string
  message?: string
  icon?: IconName
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, title, message, icon, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {title && <Label size={"lg"}>{title}</Label>}
      {message && (
        <Paragraph size={"md"} variant={"secondary"}>
          {message}
        </Paragraph>
      )}
    </div>
  )
)
Alert.displayName = "Alert"

export { Alert }
