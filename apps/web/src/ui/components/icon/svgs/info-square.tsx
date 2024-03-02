import { SVGProps } from "react"

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 6C0 2.68629 2.68629 0 6 0H18C21.3137 0 24 2.68629 24 6V18C24 21.3137 21.3137 24 18 24H6C2.68629 24 0 21.3137 0 18V6Z"
      fill="currentColor"
    />
    <path
      d="M13.5 16.6875C13.5 17.4124 12.9124 18 12.1875 18C11.4626 18 10.875 17.4124 10.875 16.6875L10.875 11.4375C10.875 10.7126 11.4626 10.125 12.1875 10.125C12.9124 10.125 13.5 10.7126 13.5 11.4375L13.5 16.6875Z"
      fill="#FCFCFD"
    />
    <path
      d="M13.5 7.3125C13.5 8.03737 12.9124 8.625 12.1875 8.625C11.4626 8.625 10.875 8.03737 10.875 7.3125C10.875 6.58763 11.4626 6 12.1875 6C12.9124 6 13.5 6.58763 13.5 7.3125Z"
      fill="#FCFCFD"
    />
  </svg>
)
export default SVGComponent
