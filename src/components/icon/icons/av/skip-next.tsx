import React from "react";
import { withIcon } from "../../hoc";

const SkipNext = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(2)">
        <path
          d="M0 12L8.5 6L0 0V12ZM2 3.86L5.03 6L2 8.14V3.86ZM10 0H12V12H10V0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SkipNext;
