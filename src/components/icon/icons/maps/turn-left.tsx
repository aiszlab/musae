import React from "react";
import { withIcon } from "../../hoc";

const TurnLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.7143)">
        <path
          d="M3.83 5L5.42 6.59L4 8L0 4L4 0L5.41 1.41L3.83 3H12C13.1 3 14 3.9 14 5V14H12V5H3.83Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TurnLeft;
