import React from "react";
import { withIcon } from "../../hoc";

const Radio = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.5714, 0) scale(1.1429)">
        <path
          d="M18 5H6.3L14.56 1.66L13.88 0L1.24 5.15C0.51 5.43 0 6.17 0 7V19C0 20.1 0.89 21 2 21H18C19.11 21 20 20.1 20 19V7C20 5.89 19.11 5 18 5ZM18 7V10H16V8H14V10H2V7H18ZM2 19V12H18V19H2Z"
          fill="currentColor"
        />
        <path
          d="M6 17.98C7.38071 17.98 8.5 16.8607 8.5 15.48C8.5 14.0993 7.38071 12.98 6 12.98C4.61929 12.98 3.5 14.0993 3.5 15.48C3.5 16.8607 4.61929 17.98 6 17.98Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Radio;
