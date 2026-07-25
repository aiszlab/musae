import React from "react";
import { withIcon } from "../../hoc";

const KeyboardBackspace = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4) scale(1.3333)">
        <path d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default KeyboardBackspace;
