import React from "react";
import { withIcon } from "../../hoc";

const EdgesensorLow = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M0 5H2V12H0V5ZM18 8H20V15H18V8ZM14 0.00999999L6 0C4.9 0 4 0.9 4 2V18C4 19.1 4.9 20 6 20H14C15.1 20 16 19.1 16 18V2C16 0.9 15.1 0.00999999 14 0.00999999ZM14 18H6V17H14V18ZM14 15H6V5H14V15ZM6 3V2H14V3H6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default EdgesensorLow;
