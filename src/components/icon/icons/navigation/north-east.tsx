import React from "react";
import { withIcon } from "../../hoc";

const NorthEast = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.6)">
        <path d="M5 0V2H11.59L0 13.59L1.41 15L13 3.41V10H15V0H5Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default NorthEast;
