import React from "react";
import { withIcon } from "../../hoc";

const LaptopWindows = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.5) scale(1)">
        <path
          d="M20 15V14C21.1 14 21.99 13.1 21.99 12L22 2C22 0.9 21.1 0 20 0H4C2.9 0 2 0.9 2 2V12C2 13.1 2.9 14 4 14V15H0V17H24V15H20ZM4 2H20V12H4V2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LaptopWindows;
