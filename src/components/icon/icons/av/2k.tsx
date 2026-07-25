import React from "react";
import { withIcon } from "../../hoc";

const TwoK = withIcon(({ size }) => {
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
        <path
          d="M8 10.5H5V9.5H7C7.55 9.5 8 9.05 8 8.5V7C8 6.45 7.55 6 7 6H3.5V7.5H6.5V8.5H4.5C3.95 8.5 3.5 8.95 3.5 9.5V12H8V10.5Z"
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

export default TwoK;
