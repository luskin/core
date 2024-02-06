import * as Icons from "../icons"

type IconNames = keyof typeof Icons

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconNames
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const SvgIcon = Icons[name]
  return <SvgIcon {...props} />
}
