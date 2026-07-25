import React from "react";
import { withIcon } from "../../hoc";

const Filter6 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.0909)">
        <path
          d="M2 4H0V20C0 21.1 0.9 22 2 22H18V20H2V4ZM20 0H6C4.9 0 4 0.9 4 2V16C4 17.1 4.9 18 6 18H20C21.1 18 22 17.1 22 16V2C22 0.9 21.1 0 20 0ZM20 16H6V2H20V16ZM12 14H14C15.1 14 16 13.11 16 12V10C16 8.89 15.1 8 14 8H12V6H16V4H12C10.9 4 10 4.89 10 6V12C10 13.11 10.9 14 12 14ZM12 10H14V12H12V10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Filter6;
