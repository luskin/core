import { Flex, FlexProps } from "../flex"

export interface RowProps extends FlexProps {}

export function Row(props: RowProps) {
  return <Flex {...props} />
}
