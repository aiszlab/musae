import React from "react";
import { withIcon } from "../../hoc";

const AdfScanner = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M17 8H16V0H4V8H3C1.34 8 0 9.34 0 11V16H20V11C20 9.34 18.66 8 17 8ZM6 2H14V8H6V2ZM18 14H2V11C2 10.45 2.45 10 3 10H17C17.55 10 18 10.45 18 11V14Z"
          fill="currentColor"
        />
        <path
          d="M16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AdfScanner;
