import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 0L12 1.5L7.49963 6L12 10.5L10.5 12L5.99962 7.5L1.5 12L0 10.5L4.5 6L0 1.5L1.5 0L5.99962 4.5L10.5 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SVGComponent;
