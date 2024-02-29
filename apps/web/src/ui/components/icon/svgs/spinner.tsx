import { SVGProps } from "react"

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_712_2195)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42ZM24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
        fill="#E4E4E9"
      />
      <path
        d="M24 -1.04907e-06C27.1517 -1.18684e-06 30.2726 0.620776 33.1844 1.82689C36.0962 3.033 38.742 4.80083 40.9706 7.02944C43.1992 9.25804 44.967 11.9038 46.1731 14.8156C47.3792 17.7274 48 20.8483 48 24L42 24C42 21.6362 41.5344 19.2956 40.6298 17.1117C39.7252 14.9278 38.3994 12.9435 36.7279 11.2721C35.0565 9.60062 33.0722 8.27475 30.8883 7.37017C28.7044 6.46558 26.3638 6 24 6L24 -1.04907e-06Z"
        fill="#1C2024"
      />
    </g>
    <defs>
      <clipPath id="clip0_712_2195">
        <rect width={48} height={48} fill="white" />
      </clipPath>
    </defs>
  </svg>
)
export default SVGComponent
