import React from "react";
import { withIcon } from "../../hoc";

const KeyboardArrowUp = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.59) scale(2)">
        <path d="M1.41 7.41L6 2.83L10.59 7.41L12 6L6 0L0 6L1.41 7.41Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default KeyboardArrowUp;
