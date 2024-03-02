import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M2 5.5L0 7.5L6 14L16 4L14 2L6 10L2 5.5Z" fill="currentColor" />
  </svg>
);
export default SVGComponent;
