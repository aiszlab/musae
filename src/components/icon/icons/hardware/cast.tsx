import React from "react";
import { withIcon } from "../../hoc";

const Cast = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.1818) scale(1.0909)">
        <path
          d="M20 0H2C0.9 0 0 0.9 0 2V5H2V2H20V16H13V18H20C21.1 18 22 17.1 22 16V2C22 0.9 21.1 0 20 0ZM0 15V18H3C3 16.34 1.66 15 0 15ZM0 11V13C2.76 13 5 15.24 5 18H7C7 14.13 3.87 11 0 11ZM0 7V9C4.97 9 9 13.03 9 18H11C11 11.92 6.07 7 0 7Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Cast;
