import React from "react";
import { withIcon } from "../../hoc";

const LocalCafe = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path
          d="M14 2V10C14 11.1 13.1 12 12 12H6C4.9 12 4 11.1 4 10V2H14ZM18 0H2V10C2 12.21 3.79 14 6 14H12C14.21 14 16 12.21 16 10V7H18C19.11 7 20 6.11 20 5V2C20 0.89 19.11 0 18 0ZM16 5V2H18V5H16ZM18 16H0V18H18V16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocalCafe;
