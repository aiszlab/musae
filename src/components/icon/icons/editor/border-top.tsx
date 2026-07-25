import React from "react";
import { withIcon } from "../../hoc";

const BorderTop = withIcon(({ size }) => {
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
          d="M4 18H6V16H4V18ZM4 10H6V8H4V10ZM8 10H10V8H8V10ZM8 18H10V16H8V18ZM0 14H2V12H0V14ZM0 18H2V16H0V18ZM0 10H2V8H0V10ZM0 6H2V4H0V6ZM8 14H10V12H8V14ZM16 6H18V4H16V6ZM16 10H18V8H16V10ZM0 0V2H18V0H0ZM16 14H18V12H16V14ZM12 18H14V16H12V18ZM8 6H10V4H8V6ZM16 18H18V16H16V18ZM12 10H14V8H12V10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BorderTop;
