import React from "react";
import { withIcon } from "../../hoc";

const PlayArrow = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.5714, 0) scale(1.7143)">
        <path d="M2 3.64L7.27 7L2 10.36V3.64ZM0 0V14L11 7L0 0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default PlayArrow;
