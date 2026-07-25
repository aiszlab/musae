import React from "react";
import { withIcon } from "../../hoc";

const AutoAwesomeMotion = withIcon(({ size }) => {
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
          d="M12 0H2C0.9 0 0 0.9 0 2V12H2V2H12V0ZM16 4H6C4.9 4 4 4.9 4 6V16H6V6H16V4ZM18 8H10C8.9 8 8 8.9 8 10V18C8 19.1 8.9 20 10 20H18C19.1 20 20 19.1 20 18V10C20 8.9 19.1 8 18 8ZM18 18H10V10H18V18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AutoAwesomeMotion;
