import { Icon, IconName } from "@/ui/components/icon"
import { stringUtils } from "@shared/utils"
import { Row } from "../flex"
import { Button } from "@/ui/components/button"
import Link from "next/link"
import { UnauthenticatedHeaderActions } from "./unauthenticated.actions"
import { AuthenticatedHeaderActions } from "./authenticated.actions"

interface HeaderProps {
  icon?: IconName | React.ReactNode
  onIconClickHref?: string
  authenticated?: boolean
}

export function Header(props: HeaderProps) {
  const {
    icon = "mothershipWordmark",
    onIconClickHref = "/",
    authenticated,
  } = props
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex h-8 items-center justify-start">
        {stringUtils.isString(icon) ? (
          <Link href={onIconClickHref}>
            <Icon name={icon as IconName} className="h-4" />
          </Link>
        ) : (
          icon
        )}
      </div>
      {authenticated ? (
        <AuthenticatedHeaderActions />
      ) : (
        <UnauthenticatedHeaderActions />
      )}
    </header>
  )
}
