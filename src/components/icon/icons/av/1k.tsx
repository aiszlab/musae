import React from "react";
import { withIcon } from "../../hoc";

const OneK = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16Z"
          fill="currentColor"
        />
        <path d="M5.5 12H7V6H4V7.5H5.5V12Z" fill="currentColor" />
        <path
          d="M10.5 9.75L12.25 12H14L11.75 9L14 6H12.25L10.5 8.25V6H9V12H10.5V9.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default OneK;
