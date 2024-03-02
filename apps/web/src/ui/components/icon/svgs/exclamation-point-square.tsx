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
      d="M10.875 7.3125C10.875 6.58763 11.4626 6 12.1875 6C12.9124 6 13.5 6.58763 13.5 7.3125V12.5625C13.5 13.2874 12.9124 13.875 12.1875 13.875C11.4626 13.875 10.875 13.2874 10.875 12.5625V7.3125Z"
      fill="#FCFCFD"
    />
    <path
      d="M10.875 16.6875C10.875 15.9626 11.4626 15.375 12.1875 15.375C12.9124 15.375 13.5 15.9626 13.5 16.6875C13.5 17.4124 12.9124 18 12.1875 18C11.4626 18 10.875 17.4124 10.875 16.6875Z"
      fill="#FCFCFD"
    />
  </svg>
)
export default SVGComponent
