import React from "react";
import { withIcon } from "../../hoc";

const Museum = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M20 9V7L10 0L0 7V9H2V18H0V20H20V18H18V9H20ZM16 18H4V7H16V18Z"
          fill="currentColor"
        />
        <path d="M8 12L10 15L12 12V16H14V9H12L10 12L8 9H6V16H8V12Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default Museum;
