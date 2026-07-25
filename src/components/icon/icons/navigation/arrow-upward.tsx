import React from "react";
import { withIcon } from "../../hoc";

const ArrowUpward = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.5)">
        <path d="M0 8L1.41 9.41L7 3.83V16H9V3.83L14.58 9.42L16 8L8 0L0 8Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default ArrowUpward;
