import React from "react";
import { withIcon } from "../../hoc";

const ExposurePlus1 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.25) scale(1.5)">
        <path
          d="M6 2H4V6H0V8H4V12H6V8H10V6H6V2ZM16 13H14V2.38L11 3.4V1.7L15.7 0H16V13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ExposurePlus1;
