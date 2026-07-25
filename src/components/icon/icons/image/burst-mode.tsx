import React from "react";
import { withIcon } from "../../hoc";

const BurstMode = withIcon(({ size }) => {
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
          d="M0 0H2V14H0V0ZM4 0H6V14H4V0ZM21 0H9C8.45 0 8 0.45 8 1V13C8 13.55 8.45 14 9 14H21C21.55 14 22 13.55 22 13V1C22 0.45 21.55 0 21 0ZM20 12H10V2H20V12ZM16.43 7.62L14.43 10.19L13 8.47L11 10.99H19L16.43 7.62Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BurstMode;
