import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6.5 1.75C6.5 0.783502 7.28351 0 8.25 0C9.2165 0 10 0.783502 10 1.75V8.75C10 9.7165 9.2165 10.5 8.25 10.5C7.28351 10.5 6.5 9.7165 6.5 8.75V1.75Z"
      fill="currentColor"
    />
    <path
      d="M6.5 14.25C6.5 13.2835 7.2835 12.5 8.25 12.5C9.2165 12.5 10 13.2835 10 14.25C10 15.2165 9.2165 16 8.25 16C7.2835 16 6.5 15.2165 6.5 14.25Z"
      fill="currentColor"
    />
  </svg>
);
export default SVGComponent;
