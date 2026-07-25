import React from "react";
import { withIcon } from "../../hoc";

const BorderLeft = withIcon(({ size }) => {
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
          d="M8 18H10V16H8V18ZM8 14H10V12H8V14ZM8 2H10V0H8V2ZM8 6H10V4H8V6ZM8 10H10V8H8V10ZM4 18H6V16H4V18ZM4 2H6V0H4V2ZM4 10H6V8H4V10ZM0 18H2V0H0V18ZM16 6H18V4H16V6ZM12 18H14V16H12V18ZM16 14H18V12H16V14ZM16 0V2H18V0H16ZM16 10H18V8H16V10ZM16 18H18V16H16V18ZM12 10H14V8H12V10ZM12 2H14V0H12V2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BorderLeft;
