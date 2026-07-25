import React from "react";
import { withIcon } from "../../hoc";

const FourK = withIcon(({ size }) => {
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
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM16 16H2V2H16V16ZM6.5 12H8V10.51H9V9H8V6H6.5V9H5V6H3.5V10.5H6.5V12ZM15.2 12L13.2 9L15.2 6H13.5L11.5 9L13.5 12H15.2ZM11.5 9V6H10V12H11.5V9Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FourK;
