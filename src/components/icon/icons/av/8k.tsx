import React from "react";
import { withIcon } from "../../hoc";

const EightK = withIcon(({ size }) => {
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
          d="M4.5 12H7C7.55 12 8 11.55 8 11V7C8 6.45 7.55 6 7 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM5 7H6.5V8.5H5V7ZM5 9.5H6.5V11H5V9.5Z"
          fill="currentColor"
        />
        <path
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16Z"
          fill="currentColor"
        />
        <path
          d="M11.5 9.75L13.25 12H15L12.75 9L15 6H13.25L11.5 8.25V6H10V12H11.5V9.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default EightK;
