import { VariantProps, cva } from "class-variance-authority"
import { Icon, IconName } from "../icon"
import React, { useMemo } from "react"
import { cn } from "@/lib/tailwind/utils"
import { Label } from "../typography"

const avatarVariants = cva(
  "w-full flex justify-center items-center bg-slate-4",
  {
    variants: {
      variant: {
        circle: "rounded-full h-[34px] w-[34px]",
      },
    },
    defaultVariants: {
      variant: "circle",
    },
  }
)

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  initials?: string
  imageSrc?: string
  icon?: IconName
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    { className, variant, initials, icon = "userFlat", imageSrc, ...props },
    ref
  ) => {
    const component = useMemo(() => {
      if (imageSrc) {
        return (
          <img
            src={imageSrc}
            alt={`Avatar for ${initials}`}
            className="w-full h-full object-cover rounded-full"
          />
        )
      }
      if (initials) {
        return <Label size={"sm"}>{initials}</Label>
      }
      return <Icon name={icon} className="h-3" />
    }, [initials, icon, imageSrc])

    return (
      <div
        ref={ref}
        role="avatar"
        className={cn(avatarVariants({ variant }), className)}
        {...props}
      >
        {component}
      </div>
    )
  }
)
Avatar.displayName = "Avatar"

export { Avatar }
