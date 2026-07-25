import React from "react";
import { withIcon } from "../../hoc";

const Nat = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.0909) scale(1.0909)">
        <path
          d="M5.82 11H10V9H5.82C5.4 7.84 4.3 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C4.3 13 5.4 12.16 5.82 11ZM3 11C2.45 11 2 10.55 2 10C2 9.45 2.45 9 3 9C3.55 9 4 9.45 4 10C4 10.55 3.55 11 3 11Z"
          fill="currentColor"
        />
        <path
          d="M22 10L18 7V9H13.95C13.45 3.95 9.19 0 4 0V2C8.42 2 12 5.58 12 10C12 14.42 8.42 18 4 18V20C9.19 20 13.45 16.05 13.95 11H18V13L22 10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Nat;
