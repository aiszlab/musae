import React from "react";
import { withIcon } from "../../hoc";

const FiberPin = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 7.5) scale(1.5)">
        <path
          d="M7 6H8.5V0H7V6ZM14.75 0V3.5L12.25 0H11V6H12.25V2.5L14.8 6H16V0H14.75ZM3.5 0H0V6H1.5V4H3.5C4.35 4 5 3.35 5 2.5V1.5C5 0.65 4.35 0 3.5 0ZM3.5 2.5H1.5V1.5H3.5V2.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FiberPin;
