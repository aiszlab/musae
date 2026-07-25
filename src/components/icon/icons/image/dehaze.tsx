import React from "react";
import { withIcon } from "../../hoc";

const Dehaze = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.8) scale(1.2)">
        <path d="M0 10V12H20V10H0ZM0 5V7H20V5H0ZM0 0V2H20V0H0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default Dehaze;
