import React from "react";
import { withIcon } from "../../hoc";

const SouthEast = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.6)">
        <path d="M15 5H13V11.59L1.41 0L0 1.41L11.59 13H5V15H15V5Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default SouthEast;
