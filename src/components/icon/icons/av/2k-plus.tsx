import React from "react";
import { withIcon } from "../../hoc";

const TwoKPlus = withIcon(({ size }) => {
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
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 8.5H14.5V7H13.5V8.5H12V9.5H13.5V11H14.5V9.5H16V16H2V2H16V8.5Z"
          fill="currentColor"
        />
        <path
          d="M7 10.5H4.5V9.5H6C6.55 9.5 7 9.05 7 8.5V7C7 6.45 6.55 6 6 6H3V7.5H5.5V8.5H4C3.45 8.5 3 8.95 3 9.5V12H7V10.5Z"
          fill="currentColor"
        />
        <path
          d="M9.5 9.75L11.25 12H13L10.75 9L13 6H11.25L9.5 8.25V6H8V12H9.5V9.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TwoKPlus;
