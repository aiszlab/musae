import React from "react";
import { withIcon } from "../../hoc";

const GraphicEq = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.2, 0) scale(1.2)">
        <path
          d="M4 16H6V4H4V16ZM8 20H10V0H8V20ZM0 12H2V8H0V12ZM12 16H14V4H12V16ZM16 8V12H18V8H16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default GraphicEq;
