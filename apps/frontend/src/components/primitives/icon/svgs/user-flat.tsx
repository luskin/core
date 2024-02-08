import { SVGProps } from "react"

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={8}
    height={8}
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 7C0 6.17157 0.671573 5.5 1.5 5.5H6.5C7.32843 5.5 8 6.17157 8 7V8H0V7Z"
      fill="currentColor"
    />
    <path
      d="M1.75 2.25C1.75 1.00736 2.75736 0 4 0C5.24264 0 6.25 1.00736 6.25 2.25C6.25 3.49264 5.24264 4.5 4 4.5C2.75736 4.5 1.75 3.49264 1.75 2.25Z"
      fill="currentColor"
    />
  </svg>
)
export default SVGComponent
