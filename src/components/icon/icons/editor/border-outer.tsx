import React from "react";
import { withIcon } from "../../hoc";

const BorderOuter = withIcon(({ size }) => {
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
          d="M10 4H8V6H10V4ZM10 8H8V10H10V8ZM14 8H12V10H14V8ZM0 0V18H18V0H0ZM16 16H2V2H16V16ZM10 12H8V14H10V12ZM6 8H4V10H6V8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BorderOuter;
