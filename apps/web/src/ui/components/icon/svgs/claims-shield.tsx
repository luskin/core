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
      d="M12.9846 13.1517C14.2309 12.4395 15 11.1141 15 9.67871V2C15 0.895431 14.1046 0 13 0L3 0C1.89543 0 1 0.895431 1 2V9.67871C1 11.1141 1.76914 12.4395 3.01544 13.1517L7.50386 15.7165C7.81129 15.8922 8.18871 15.8922 8.49614 15.7165L12.9846 13.1517ZM3 3C3 2.44772 3.44772 2 4 2H8V7.5H3V3ZM8 7.5H13V10.4338C13 10.7851 12.8157 11.1106 12.5145 11.2913L8 14V7.5Z"
      fill="currentColor"
    />
  </svg>
)
export default SVGComponent
