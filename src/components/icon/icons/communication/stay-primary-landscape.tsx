import React from "react";
import { withIcon } from "../../hoc";

const StayPrimaryLandscape = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.3636) scale(1.0909)">
        <path
          d="M0.00999999 2L0 12C0 13.1 0.9 14 2 14H20C21.1 14 22 13.1 22 12V2C22 0.9 21.1 0 20 0H2C0.9 0 0.00999999 0.9 0.00999999 2ZM18 2V12H4V2H18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default StayPrimaryLandscape;
