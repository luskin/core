import { Icon, IconName } from "@/components/primitives/icon"
import { stringUtils } from "@core/utils"
import { Row } from "../flex"
import { Button } from "@/components/primitives/button"
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
      <div className="justify-start flex h-8 items-center">
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
