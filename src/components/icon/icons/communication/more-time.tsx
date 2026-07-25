import React from "react";
import { withIcon } from "../../hoc";

const MoreTime = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.5714) scale(1.1429)">
        <path d="M8 6V12L12.7 14.9L13.5 13.7L9.5 11.3V6H8Z" fill="currentColor" />
        <path
          d="M15.92 10C15.97 10.33 16 10.66 16 11C16 14.9 12.9 18 9 18C5.1 18 2 14.9 2 11C2 7.1 5.1 4 9 4C9.7 4 10.37 4.1 11 4.29V2.23C10.36 2.08 9.69 2 9 2C4 2 0 6 0 11C0 16 4 20 9 20C14 20 18 16 18 11C18 10.66 17.98 10.33 17.94 10H15.92Z"
          fill="currentColor"
        />
        <path d="M18 3V0H16V3H13V5H16V8H18V5H21V3H18Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default MoreTime;
