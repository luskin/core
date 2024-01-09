import { withClassNames } from "../utils/style"
import { IconProps } from "./icon.props"

export default withClassNames((props: IconProps) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M0 12.2501C0 10.8004 1.17525 9.62512 2.625 9.62512H11.375C12.8247 9.62512 14 10.8004 14 12.2501V14.0001H0V12.2501Z"
      fill="currentColor"
    />
    <path
      d="M3.0625 3.93762C3.0625 1.763 4.82538 0.00012207 7 0.00012207C9.17462 0.00012207 10.9375 1.763 10.9375 3.93762C10.9375 6.11224 9.17462 7.87512 7 7.87512C4.82538 7.87512 3.0625 6.11224 3.0625 3.93762Z"
      fill="currentColor"
    />
  </svg>
))
