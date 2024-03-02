import { SVGProps } from "react"

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M-3.49691e-07 8L4.5 13L6.25 11.5L4.5 9.5L10 9.5L10 6.5L4.5 6.5L6.25 4.75L4.5 3L-3.49691e-07 8Z"
      fill="currentColor"
    />
    <path
      d="M7 16L7 13.5L13.5 13.5L13.5 2.5L7 2.5L7 6.47695e-07L16 2.54292e-07L16 16L7 16Z"
      fill="currentColor"
    />
  </svg>
)
export default SVGComponent
