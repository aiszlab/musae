import React from "react";
import { withIcon } from "../../hoc";

const MoveUp = withIcon(({ size }) => {
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
          d="M2 10C2 7.55 3.76 5.53 6.08 5.09L4.59 6.59L6 8L10 3.99L6 0L4.59 1.41L6.17 2.99V3.05C2.7 3.46 0 6.42 0 10C0 13.87 3.13 17 7 17H10V15H7C4.24 15 2 12.76 2 10Z"
          fill="currentColor"
        />
        <path d="M12 10V17H21V10H12ZM19 15H14V12H19V15Z" fill="currentColor" />
        <path d="M21 1H12V8H21V1Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default MoveUp;
