import React from "react";
import { withIcon } from "../../hoc";

const PowerInput = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 8.2105) scale(1.2632)">
        <path d="M0 0V2H19V0H0ZM0 6H5V4H0V6ZM7 6H12V4H7V6ZM14 6H19V4H14V6Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default PowerInput;
