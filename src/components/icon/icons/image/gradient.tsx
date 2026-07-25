import React from "react";
import { withIcon } from "../../hoc";

const Gradient = withIcon(({ size }) => {
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
          d="M8 6H10V8H8V6ZM6 8H8V10H6V8ZM10 8H12V10H10V8ZM12 6H14V8H12V6ZM4 6H6V8H4V6ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM6 15H4V13H6V15ZM10 15H8V13H10V15ZM14 15H12V13H14V15ZM16 8H14V10H16V12H14V10H12V12H10V10H8V12H6V10H4V12H2V10H4V8H2V2H16V8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Gradient;
