import React from "react";
import { withIcon } from "../../hoc";

const EdgesensorHigh = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2) scale(1)">
        <path
          d="M3 5H5V12H3V5ZM0 8H2V15H0V8ZM22 5H24V12H22V5ZM19 8H21V15H19V8ZM16 0.00999999L8 0C6.9 0 6 0.9 6 2V18C6 19.1 6.9 20 8 20H16C17.1 20 18 19.1 18 18V2C18 0.9 17.1 0.00999999 16 0.00999999ZM16 18H8V17H16V18ZM16 15H8V5H16V15ZM8 3V2H16V3H8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default EdgesensorHigh;
