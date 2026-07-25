import React from "react";
import { withIcon } from "../../hoc";

const Filter = withIcon(({ size }) => {
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
          d="M14.96 9.29L12.21 12.83L10.25 10.47L7.5 14H18.5L14.96 9.29ZM2 4H0V20C0 21.1 0.9 22 2 22H18V20H2V4ZM20 0H6C4.9 0 4 0.9 4 2V16C4 17.1 4.9 18 6 18H20C21.1 18 22 17.1 22 16V2C22 0.9 21.1 0 20 0ZM20 16H6V2H20V16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Filter;
