import React from "react";
import { withIcon } from "../../hoc";

const BorderBottom = withIcon(({ size }) => {
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
          d="M6 8H4V10H6V8ZM10 12H8V14H10V12ZM6 0H4V2H6V0ZM10 8H8V10H10V8ZM2 0H0V2H2V0ZM10 4H8V6H10V4ZM14 8H12V10H14V8ZM10 0H8V2H10V0ZM14 0H12V2H14V0ZM16 10H18V8H16V10ZM16 14H18V12H16V14ZM2 4H0V6H2V4ZM16 0V2H18V0H16ZM16 6H18V4H16V6ZM2 8H0V10H2V8ZM0 18H18V16H0V18ZM2 12H0V14H2V12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BorderBottom;
