import { SVGProps } from "react"

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={17}
    height={16}
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.55172 0C5.24702 0 5 0.247015 5 0.551724V10.3666L5.55172 11.0345V15.6138C5.55172 15.8271 5.72463 16 5.93793 16H6.82069C7.03399 16 7.2069 15.8271 7.2069 15.6138V14.4368H13.8276V15.6138C13.8276 15.8271 14.0005 16 14.2138 16H15.0966C15.3098 16 15.4828 15.8271 15.4828 15.6138V11.0345L16.0345 10.3666V0.551724C16.0345 0.247015 15.7875 0 15.4828 0L5.55172 0ZM7.20675 6.67241H13.8274L14.3792 8.41248L12.1723 9.87931H8.86193L6.65503 8.41248L7.20675 6.67241ZM6.65511 10.4828H8.31029V11.0345H6.65511V10.4828ZM14.3793 10.4828H12.7241V11.0345H14.3793V10.4828Z"
      fill="currentColor"
    />
    <path
      d="M0.5 2H3.5V8H2.03571L1.5 9.62381L3.5 10.4416V11.25L4 11.75V14.5833H2V15.65C2 15.8433 1.8433 16 1.65 16H0.85C0.6567 16 0.5 15.8433 0.5 15.65V11.5L0 11L0 2.5C0 2.22386 0.223858 2 0.5 2Z"
      fill="currentColor"
    />
  </svg>
)
export default SVGComponent