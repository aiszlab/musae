import React from "react";
import { withIcon } from "../../hoc";

const HomeWork = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.1818) scale(1.0909)">
        <path
          d="M0 8V18H6V13H8V18H14V8L7 3L0 8ZM12 16H10V11H4V16H2V9.03L7 5.46L12 9.03V16Z"
          fill="currentColor"
        />
        <path d="M18 4H16V6H18V4Z" fill="currentColor" />
        <path d="M18 8H16V10H18V8Z" fill="currentColor" />
        <path d="M18 12H16V14H18V12Z" fill="currentColor" />
        <path d="M9 0V1.97L11 3.4V2H20V16H16V18H22V0H9Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default HomeWork;
