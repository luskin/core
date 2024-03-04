import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.00373 8L2 7.1208L4.72779 4L2 0.879202L3.00373 4.32963e-07L6.5 4L3.00373 8Z"
      fill="currentColor"
    />
  </svg>
);
export default SVGComponent;
