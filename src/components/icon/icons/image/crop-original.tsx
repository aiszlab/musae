import React from "react";
import { withIcon } from "../../hoc";

const CropOriginal = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM10.96 9.29L8.21 12.83L6.25 10.47L3.5 14H14.5L10.96 9.29Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CropOriginal;
