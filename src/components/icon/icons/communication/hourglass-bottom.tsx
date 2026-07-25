import React from "react";
import { withIcon } from "../../hoc";

const HourglassBottom = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.8, 0) scale(1.2)">
        <path
          d="M12 20L11.99 14L8 10L11.99 5.99L12 0H0V6L4 10L0 13.99V20H12ZM2 5.5V2H10V5.5L6 9.5L2 5.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default HourglassBottom;
