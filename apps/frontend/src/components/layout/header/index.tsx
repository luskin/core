import { Icon, IconName } from "@/components/primitives/icon"

interface HeaderProps {
  icon?: IconName | React.ReactNode
}

export function Header(props: HeaderProps) {
  const { icon = "wordmark" } = props
  return (
    <header className="flex items-center justify-between p-4">
      <Icon name={icon as IconName} />
    </header>
  )
}
