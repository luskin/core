import { withClassNames } from "../utils/style"
import { IconProps } from "./icon.props"

export default withClassNames((props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M32 14.8655L16.0535 31L0 14.8655V7.06182L5.13712 2H11.3445L16.0535 7.06182L21.2977 2H27.1839L32 7.06182V14.8655Z"
      fill="currentColor"
    />
  </svg>
))
