import React from "react";
import { withIcon } from "../../hoc";

const BorderRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M4 18H6V16H4V18ZM0 2H2V0H0V2ZM4 2H6V0H4V2ZM4 10H6V8H4V10ZM0 18H2V16H0V18ZM8 18H10V16H8V18ZM0 10H2V8H0V10ZM0 14H2V12H0V14ZM0 6H2V4H0V6ZM8 14H10V12H8V14ZM12 10H14V8H12V10ZM16 0V18H18V0H16ZM12 18H14V16H12V18ZM12 2H14V0H12V2ZM8 10H10V8H8V10ZM8 2H10V0H8V2ZM8 6H10V4H8V6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BorderRight;
