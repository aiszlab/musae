import React from "react";
import { withIcon } from "../../hoc";

const BorderAll = withIcon(({ size }) => {
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
          d="M0 0V18H18V0H0ZM8 16H2V10H8V16ZM8 8H2V2H8V8ZM16 16H10V10H16V16ZM16 8H10V2H16V8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BorderAll;
