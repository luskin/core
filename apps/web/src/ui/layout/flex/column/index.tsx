import { Flex, FlexProps } from "../flex"

export interface ColumnProps extends FlexProps {}

export function Column(props: ColumnProps) {
  return <Flex direction="col" {...props} />
}
