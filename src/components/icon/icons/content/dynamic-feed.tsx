import React from "react";
import { withIcon } from "../../hoc";

const DynamicFeed = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path d="M6 5H4V12C4 13.1 4.9 14 6 14H15V12H6V5Z" fill="currentColor" />
        <path
          d="M18 0H10C8.9 0 8 0.9 8 2V8C8 9.1 8.9 10 10 10H18C19.1 10 20 9.1 20 8V2C20 0.9 19.1 0 18 0ZM18 8H10V4H18V8Z"
          fill="currentColor"
        />
        <path d="M2 9H0V16C0 17.1 0.9 18 2 18H11V16H2V9Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default DynamicFeed;
