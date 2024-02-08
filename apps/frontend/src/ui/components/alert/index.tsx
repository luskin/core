import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/tailwind/utils"
import { Icon, IconName } from "../icon"
import { Label, Paragraph } from "../typography"
import { Column, Row } from "@/ui/layout/flex"

const alertVariants = cva("w-full rounded-lg border p-4", {
  variants: {
    variant: {
      warning: "bg-warning-4 border-warning-10 text-warning-10",
      error: "bg-error-5 border-error-10 text-error-10",
      info: "bg-slate-1 border-slate-3",
      success: "bg-accent-5 border-accent-10",
    },
  },
  defaultVariants: {
    variant: "warning",
  },
})

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string
  message?: string
  icon?: IconName
  hideIcon?: boolean
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, title, message, icon, hideIcon, ...props }, ref) => {
    const iconName = React.useMemo(() => {
      if (icon) {
        return icon
      }
      switch (variant) {
        case "warning":
          return "exclamationPointSquare"
        case "error":
          return "exclamationPointSquare"
        case "info":
          return "infoSquare"
        case "success":
          return "infoSquare"
        default:
          return "exclamationPointSquare"
      }
    }, [icon])

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <Row justify="start" align="center">
          {!hideIcon && <Icon name={iconName} className="mr-4 h-6 w-6" />}
          <Column gap={1}>
            {title && <Label size={"lg"}>{title}</Label>}
            {message && (
              <Paragraph size={"md"} variant={"secondary"}>
                {message}
              </Paragraph>
            )}
          </Column>
        </Row>
      </div>
    )
  }
)
Alert.displayName = "Alert"

export { Alert }
