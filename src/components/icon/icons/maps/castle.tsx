import React from "react";
import { withIcon } from "../../hoc";

const Castle = withIcon(({ size }) => {
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
          d="M20 6V8H18V0H16V2H14V0H12V2H10V0H8V2H6V0H4V8H2V6H0V18H9V15C9 13.9 9.9 13 11 13C12.1 13 13 13.9 13 15V18H22V6H20ZM20 16H15V15C15 12.79 13.21 11 11 11C8.79 11 7 12.79 7 15V16H2V10H6V4H16V10H20V16Z"
          fill="currentColor"
        />
        <path d="M10 6H8V9H10V6Z" fill="currentColor" />
        <path d="M14 6H12V9H14V6Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default Castle;
