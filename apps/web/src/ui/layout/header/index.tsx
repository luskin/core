import { Icon, IconName } from "@/ui/components/icon"
import { stringUtils } from "@shared/utils"
import Link from "next/link"
import { UnauthenticatedHeaderActions } from "./unauthenticated.actions"
import { AuthenticatedHeaderActions } from "./authenticated"

interface HeaderProps {
  icon?: IconName | React.ReactNode
  onIconClickHref?: string
  authenticated?: boolean
  isAdmin?: boolean
}

export function Header(props: HeaderProps) {
  const {
    icon = "mothershipWordmark",
    onIconClickHref = "/",
    authenticated,
    isAdmin,
  } = props
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex h-8 items-center justify-start">
        {stringUtils.isString(icon) ? (
          <Link href={onIconClickHref}>
            <Icon name={icon as IconName} className="h-4" />
          </Link>
        ) : (
          icon
        )}
        <Icon name="hamburgerMenu" className="h-3 ml-4" />
      </div>
      {authenticated ? (
        <AuthenticatedHeaderActions />
      ) : (
        <UnauthenticatedHeaderActions />
      )}
    </div>
  )
}
