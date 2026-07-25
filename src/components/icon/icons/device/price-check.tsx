import React from "react";
import { withIcon } from "../../hoc";

const PriceCheck = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.6667, 0) scale(1.3333)">
        <path
          d="M7 10V6C7 5.45 6.55 5 6 5H2V3H7V1H4.5V0H2.5V1H1C0.45 1 0 1.45 0 2V6C0 6.55 0.45 7 1 7H5V9H0V11H2.5V12H4.5V11H6C6.55 11 7 10.55 7 10Z"
          fill="currentColor"
        />
        <path
          d="M15.59 9.52L9.93 15.17L7.1 12.34L5.69 13.76L9.93 18L17 10.93L15.59 9.52Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PriceCheck;
