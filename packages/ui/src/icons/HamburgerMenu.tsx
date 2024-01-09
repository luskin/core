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
    <path d="M0 4H32V8H0V4Z" fill="currentColor" />
    <path d="M0 14H32V18H0V14Z" fill="currentColor" />
    <path d="M32 24H0V28H32V24Z" fill="currentColor" />
  </svg>
))
