import { withClassNames } from "../utils/style"
import { IconProps } from "./icon.props"

export default withClassNames((props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    className={props.className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 0L32 4L19.999 16L32 28L28 32L15.999 20L4 32L0 28L12 16L0 4L4 0L15.999 12L28 0Z"
      fill="currentColor"
    />
  </svg>
))
