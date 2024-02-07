import { Flex, FlexProps } from "../flex"

interface RowProps extends FlexProps {}

export function Row(props: RowProps) {
  return <Flex {...props} />
}
