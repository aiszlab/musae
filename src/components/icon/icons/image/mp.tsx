import React from "react";
import { withIcon } from "../../hoc";

const Mp = withIcon(({ size }) => {
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
          d="M14 6H10.5V12H12V10.5H14C14.55 10.5 15 10.05 15 9.5V7C15 6.45 14.55 6 14 6ZM13.5 9H12V7.5H13.5V9Z"
          fill="currentColor"
        />
        <path
          d="M8.5 6H4C3.45 6 3 6.45 3 7V12H4.5V7.5H5.5V10.5H7V7.5H8V12H9.5V7C9.5 6.45 9.05 6 8.5 6Z"
          fill="currentColor"
        />
        <path
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM2 16V2H16V16H2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Mp;
