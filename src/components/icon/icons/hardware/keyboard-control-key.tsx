import React from "react";
import { withIcon } from "../../hoc";

const KeyboardControlKey = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.7914) scale(1.7143)">
        <path d="M0 7L1.41 8.41L7 2.83L12.59 8.41L14 7L7 0L0 7Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default KeyboardControlKey;
