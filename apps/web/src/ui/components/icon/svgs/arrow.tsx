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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75003 7.00002H16V9.00002H3.75003L8.16532 13.7522L6.69572 15.1088L0.0696106 7.93048L6.69572 0.752197L8.16532 2.10876L3.75003 7.00002Z"
      fill="#1C2024"
    />
  </svg>
)
export default SVGComponent
