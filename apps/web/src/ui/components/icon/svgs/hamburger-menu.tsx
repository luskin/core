import { SVGProps } from "react"

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 1.5H12V3H0V1.5Z" fill="currentColor" />
    <path d="M0 5.25H12V6.75H0V5.25Z" fill="currentColor" />
    <path d="M12 9H0V10.5H12V9Z" fill="currentColor" />
  </svg>
)
export default SVGComponent
