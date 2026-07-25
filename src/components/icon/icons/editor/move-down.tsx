import React from "react";
import { withIcon } from "../../hoc";

const MoveDown = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.2857) scale(1.1429)">
        <path
          d="M2 7C2 9.45 3.76 11.47 6.08 11.91L4.59 10.42L6 9L10 13.01L6 17L4.59 15.59L6.17 14.01V13.95C2.7 13.54 0 10.58 0 7C0 3.13 3.13 0 7 0H10V2H7C4.24 2 2 4.24 2 7Z"
          fill="currentColor"
        />
        <path d="M21 7V0H12V7H21ZM19 5H14V2H19V5Z" fill="currentColor" />
        <path d="M21 9H12V16H21V9Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default MoveDown;
