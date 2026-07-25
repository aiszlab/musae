import React from "react";
import { withIcon } from "../../hoc";

const NorthWest = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.6)">
        <path d="M0 10H2V3.41L13.59 15L15 13.59L3.41 2H10V0H0V10Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default NorthWest;
