import React from "react";
import { withIcon } from "../../hoc";

const KeyboardReturn = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.4211) scale(1.2632)">
        <path
          d="M17 1V5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H19V1H17Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default KeyboardReturn;
