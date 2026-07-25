import React from "react";
import { withIcon } from "../../hoc";

const AlignHorizontalRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path d="M18 0H20V20H18V0ZM0 8H16V5H0V8ZM6 15H16V12H6V15Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default AlignHorizontalRight;
