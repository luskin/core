import { SVGProps } from "react"

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 9.33333V16H9.5V9.33333H16V6.66667H9.5V0H6.5V6.66667H0V9.33333H6.5Z"
      fill="currentColor"
    />
  </svg>
)
export default SVGComponent
