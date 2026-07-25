import React from "react";
import { withIcon } from "../../hoc";

const KeyboardTab = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 5.1429) scale(1.1429)">
        <path
          d="M10.59 1.41L14.17 5H0V7H14.17L10.58 10.59L12 12L18 6L12 0L10.59 1.41ZM19 0V12H21V0H19Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default KeyboardTab;
