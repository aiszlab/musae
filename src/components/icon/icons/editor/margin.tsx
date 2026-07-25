import React from "react";
import { withIcon } from "../../hoc";

const Margin = withIcon(({ size }) => {
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
          d="M0 0V18H18V0H0ZM16 16H2V2H16V16ZM8 4H10V6H8V4ZM4 4H6V6H4V4ZM12 4H14V6H12V4ZM4 8H6V10H4V8ZM8 8H10V10H8V8ZM12 8H14V10H12V8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Margin;
