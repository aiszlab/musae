import React from "react";
import { withIcon } from "../../hoc";

const WifiLock = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.5) scale(1)">
        <path
          d="M21.98 7L24 4.98C20.93 1.9 16.69 0 12 0C7.31 0 3.07 1.9 0 4.98L12 17L15.05 13.95V11C15.05 10.55 15.14 10.12 15.28 9.71C15.82 8.14 17.29 7 19.05 7H21.98Z"
          fill="currentColor"
        />
        <path
          d="M22 12V11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11V12C17.45 12 17 12.45 17 13V16C17 16.55 17.45 17 18 17H22C22.55 17 23 16.55 23 16V13C23 12.45 22.55 12 22 12ZM21 12H19V11C19 10.45 19.45 10 20 10C20.55 10 21 10.45 21 11V12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default WifiLock;
