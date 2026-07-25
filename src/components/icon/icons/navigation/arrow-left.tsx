import React from "react";
import { withIcon } from "../../hoc";

const ArrowLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(6, 0) scale(2.4)">
        <path d="M5 0L0 5L5 10V0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default ArrowLeft;
