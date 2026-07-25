import React from "react";
import { withIcon } from "../../hoc";

const FourKPlus = withIcon(({ size }) => {
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
        <path d="M5.5 12H7V10.5H8V9H7V6H5.5V9H4V6H2.5V10.5H5.5V12Z" fill="currentColor" />
        <path
          d="M10 9.75L11.75 12H13.5L11.25 9L13.5 6H11.75L10 8.25V6H8.5V12H10V9.75Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FourKPlus;
