import React from "react";
import { withIcon } from "../../hoc";

const KeyboardCapslock = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.3965, 0) scale(1.9339)">
        <path
          d="M6 2.82L10.59 7.41L12 6L6 0L0 6L1.41 7.41L6 2.82ZM0 12.41H12V10.41H0V12.41Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default KeyboardCapslock;
