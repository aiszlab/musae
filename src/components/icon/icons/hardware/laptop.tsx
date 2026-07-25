import React from "react";
import { withIcon } from "../../hoc";

const Laptop = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4) scale(1)">
        <path
          d="M20 14C21.1 14 22 13.1 22 12V2C22 0.9 21.1 0 20 0H4C2.9 0 2 0.9 2 2V12C2 13.1 2.9 14 4 14H0V16H24V14H20ZM4 2H20V12H4V2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Laptop;
