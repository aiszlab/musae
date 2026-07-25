import React from "react";
import { withIcon } from "../../hoc";

const DeveloperBoard = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path
          d="M20 6V4H18V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V14H20V12H18V10H20V8H18V6H20ZM16 16H2V2H16V16ZM4 10H9V14H4V10ZM10 4H14V7H10V4ZM4 4H9V9H4V4ZM10 8H14V14H10V8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DeveloperBoard;
