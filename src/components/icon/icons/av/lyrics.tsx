import React from "react";
import { withIcon } from "../../hoc";

const Lyrics = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.5455) scale(1.0909)">
        <path d="M11 5H4V7H11V5Z" fill="currentColor" />
        <path d="M8 11H4V13H8V11Z" fill="currentColor" />
        <path
          d="M13 10.97V15H4L2 17V3H13V5.03C13.52 4.34 14.2 3.78 15 3.43V3C15 1.9 14.1 1 13 1H2C0.9 1 0.00999999 1.9 0.00999999 3L0 21L4 17H13C14.1 17 15 16.1 15 15V12.58C14.2 12.22 13.52 11.66 13 10.97Z"
          fill="currentColor"
        />
        <path d="M11 8H4V10H11V8Z" fill="currentColor" />
        <path
          d="M18 5.18C17.69 5.07 17.35 5 17 5C15.34 5 14 6.34 14 8C14 9.66 15.34 11 17 11C18.66 11 20 9.66 20 8V2H22V0H18V5.18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Lyrics;
