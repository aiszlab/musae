import React from "react";
import { withIcon } from "../../hoc";

const FlashOn = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(6, 0) scale(1.2)">
        <path d="M0 0V11H3V20L10 8H6L9 0H0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default FlashOn;
