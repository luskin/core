import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6.28543 5.30357L5.9997 4.28563L5 3.9949V3.55867L5.9997 3.26795L6.28543 2.25H6.71401L6.9997 3.26777L8 3.55867V3.9949L6.99969 4.2858L6.71401 5.30357H6.28543Z"
      fill="currentColor"
    />
    <path
      d="M1.66667 7.67857L2.14286 9.375H2.85714L3.33333 7.67857L5 7.19388V6.46684L3.33333 5.98214L2.85714 4.28571H2.14286L1.66667 5.98214L0 6.46684V7.19388L1.66667 7.67857Z"
      fill="currentColor"
    />
    <path
      d="M9.33321 8.01782L9.71417 9.375H10.2856L10.6665 8.01789L12 7.6301V7.04847L10.6665 6.66068L10.2856 5.30357H9.71417L9.33321 6.66075L8 7.04847V7.6301L9.33321 8.01782Z"
      fill="currentColor"
    />
  </svg>
);
export default SVGComponent;
