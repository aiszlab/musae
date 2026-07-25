import React from "react";
import { withIcon } from "../../hoc";

const NavigateBefore = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.59, 0) scale(2)">
        <path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default NavigateBefore;
