import React from "react";
import { withIcon } from "../../hoc";

const ThreeP = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M18 0H2.01C0.91 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H3.17L2 15.17V2H18V14ZM10 8C11.1 8 12 7.1 12 6C12 4.9 11.1 4 10 4C8.9 4 8 4.9 8 6C8 7.1 8.9 8 10 8ZM14 11.43C14 10.62 13.52 9.9 12.78 9.58C11.93 9.21 10.99 9 10 9C9.01 9 8.07 9.21 7.22 9.58C6.48 9.9 6 10.62 6 11.43V12H14V11.43Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ThreeP;
