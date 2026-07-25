import React from "react";
import { withIcon } from "../../hoc";

const RepeatOn = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.0909)">
        <path
          d="M20 0H2C0.9 0 0 0.9 0 2V20C0 21.1 0.9 22 2 22H20C21.1 22 22 21.1 22 20V2C22 0.9 21.1 0 20 0ZM18 18H5.83L7.41 19.58L6 21L2 17L6 13L7.41 14.42L5.83 16H16V12H18V18ZM16 9L14.59 7.58L16.17 6H6V10H4V4H16.17L14.59 2.42L16 1L20 5L16 9Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RepeatOn;
