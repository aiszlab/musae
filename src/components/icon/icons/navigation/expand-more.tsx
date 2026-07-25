import React from "react";
import { withIcon } from "../../hoc";

const ExpandMore = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.59) scale(2)">
        <path d="M10.59 0L6 4.58L1.41 0L0 1.41L6 7.41L12 1.41L10.59 0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default ExpandMore;
