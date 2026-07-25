import React from "react";
import { withIcon } from "../../hoc";

const North = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3.6, 0) scale(1.2)">
        <path d="M0 7L1.41 8.41L6 3.83V20H8V3.83L12.59 8.42L14 7L7 0L0 7Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default North;
