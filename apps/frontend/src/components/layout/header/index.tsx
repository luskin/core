import { Button, Row } from "@/components"
import { Icon, IconName } from "@/components/primitives/icon"
import { stringUtils } from "@core/utils"

interface HeaderProps {
  icon?: IconName | React.ReactNode
}

export function Header(props: HeaderProps) {
  const { icon = "wordmark" } = props
  return (
    <header className="flex items-center justify-between p-4">
      <div className="justify-start flex h-8 items-center">
        {stringUtils.isString(icon) ? <Icon name={icon as IconName} /> : icon}
      </div>
      <Row>
        <Button>Thing 1</Button>
        <div>Thing 2</div>
      </Row>
    </header>
  )
}
