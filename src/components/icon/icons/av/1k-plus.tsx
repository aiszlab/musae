import React from "react";
import { withIcon } from "../../hoc";

const OneKPlus = withIcon(({ size }) => {
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
        <path d="M4.5 12H6V6H3V7.5H4.5V12Z" fill="currentColor" />
        <path
          d="M9 9.75L10.75 12H12.5L10.25 9L12.5 6H10.75L9 8.25V6H7.5V12H9V9.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default OneKPlus;
