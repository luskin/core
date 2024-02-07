import { Flex, FlexProps } from "../flex"

interface ColProps extends FlexProps {}

export function Column(props: ColProps) {
  return <Flex direction="col" {...props} />
}
