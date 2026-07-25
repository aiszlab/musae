import React from "react";
import { withIcon } from "../../hoc";

const BorderHorizontal = withIcon(({ size }) => {
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
          d="M0 18H2V16H0V18ZM2 4H0V6H2V4ZM0 14H2V12H0V14ZM4 18H6V16H4V18ZM2 0H0V2H2V0ZM6 0H4V2H6V0ZM14 0H12V2H14V0ZM10 4H8V6H10V4ZM10 0H8V2H10V0ZM16 14H18V12H16V14ZM8 18H10V16H8V18ZM0 10H18V8H0V10ZM16 0V2H18V0H16ZM16 6H18V4H16V6ZM8 14H10V12H8V14ZM12 18H14V16H12V18ZM16 18H18V16H16V18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BorderHorizontal;
