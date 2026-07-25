import React from "react";
import { withIcon } from "../../hoc";

const FlashAuto = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.0286, 0) scale(1.1429)">
        <path
          d="M0 0V12H3V21L10 9H6L10 0H0ZM16 0H14L10.8 9H12.7L13.4 7H16.6L17.3 9H19.2L16 0ZM13.85 5.65L15 2L16.15 5.65H13.85Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FlashAuto;
