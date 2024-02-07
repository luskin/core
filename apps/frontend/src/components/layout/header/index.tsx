import { Icon, IconName } from "@/components/primitives/icon"
import { stringUtils } from "@core/utils"
import { Row } from "../flex"
import { Button } from "@/components/primitives/button"
import Link from "next/link"

interface HeaderProps {
  icon?: IconName | React.ReactNode
  onIconClickHref?: string
}

export function Header(props: HeaderProps) {
  const { icon = "mothershipWordmark", onIconClickHref = "/" } = props
  return (
    <header className="flex items-center justify-between p-4">
      <div className="justify-start flex h-8 items-center">
        {stringUtils.isString(icon) ? (
          <Link href={onIconClickHref}>
            <Icon name={icon as IconName} />
          </Link>
        ) : (
          icon
        )}
      </div>
      <Row>
        <Button>Thing 1</Button>
        <div>Thing 2</div>
      </Row>
    </header>
  )
}
