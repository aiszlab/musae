import React from "react";
import { withIcon } from "../../hoc";

const AutoAwesomeMosaic = withIcon(({ size }) => {
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
          d="M0 2V16C0 17.1 0.89 18 2 18H8V0H2C0.89 0 0 0.9 0 2ZM6 16H2V2H6V16Z"
          fill="currentColor"
        />
        <path d="M16 0H10V8H18V2C18 0.9 17.1 0 16 0ZM16 6H12V2H16V6Z" fill="currentColor" />
        <path
          d="M10 18H16C17.1 18 18 17.1 18 16V10H10V18ZM12 12H16V16H12V12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AutoAwesomeMosaic;
