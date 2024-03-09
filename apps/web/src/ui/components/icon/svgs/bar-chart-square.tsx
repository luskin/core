import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_12611_10311)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2.66667C16 1.19391 14.8061 0 13.3333 0L2.66667 0C1.19391 0 0 1.19391 0 2.66667V13.3333C0 14.8061 1.19391 16 2.66667 16H13.3333C14.8061 16 16 14.8061 16 13.3333V2.66667ZM12 9.33333C11.6318 9.33333 11.3333 9.63181 11.3333 10V12C11.3333 12.3682 11.6318 12.6667 12 12.6667C12.3682 12.6667 12.6667 12.3682 12.6667 12V10C12.6667 9.63181 12.3682 9.33333 12 9.33333ZM8.66667 8C8.66667 7.63181 8.96514 7.33333 9.33333 7.33333C9.70152 7.33333 10 7.63181 10 8V12C10 12.3682 9.70152 12.6667 9.33333 12.6667C8.96514 12.6667 8.66667 12.3682 8.66667 12V8ZM6.66667 5.33333C6.29848 5.33333 6 5.63181 6 6V12C6 12.3682 6.29848 12.6667 6.66667 12.6667C7.03486 12.6667 7.33333 12.3682 7.33333 12V6C7.33333 5.63181 7.03486 5.33333 6.66667 5.33333ZM3.33333 4C3.33333 3.63181 3.63181 3.33333 4 3.33333C4.36819 3.33333 4.66667 3.63181 4.66667 4V12C4.66667 12.3682 4.36819 12.6667 4 12.6667C3.63181 12.6667 3.33333 12.3682 3.33333 12V4Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_12611_10311">
        <rect width={16} height={16} fill="white" transform="matrix(-1 0 0 1 16 0)" />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;
