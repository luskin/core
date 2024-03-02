import { SVGProps } from "react"

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 2C0.447715 2 0 2.44772 0 3L0 5H16V3C16 2.44772 15.5523 2 15 2H1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 7H16V13C16 13.5523 15.5523 14 15 14H1C0.447715 14 0 13.5523 0 13L0 7ZM10 10H14V12H10V10Z"
      fill="currentColor"
    />
  </svg>
)
export default SVGComponent
