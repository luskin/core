import { SVGProps } from "react"

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 7.93496L15 0.5L9.5 16L7.25 9.25L0 7.93496Z"
      fill="currentColor"
    />
  </svg>
)
export default SVGComponent
