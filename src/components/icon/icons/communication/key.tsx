import React from "react";
import { withIcon } from "../../hoc";

const Key = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 5.4545) scale(1.0909)">
        <path
          d="M20 4H11.65C10.83 1.67 8.61 0 6 0C2.69 0 0 2.69 0 6C0 9.31 2.69 12 6 12C8.61 12 10.83 10.33 11.65 8H12L14 10L16 8L18 10L22 5.96L20 4ZM6 9C4.35 9 3 7.65 3 6C3 4.35 4.35 3 6 3C7.65 3 9 4.35 9 6C9 7.65 7.65 9 6 9Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Key;
