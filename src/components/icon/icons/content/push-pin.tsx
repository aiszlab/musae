import React from "react";
import { withIcon } from "../../hoc";

const PushPin = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3.6, 0) scale(1.2)">
        <path
          d="M9 2V7C9 8.12 9.37 9.16 10 10H4C4.65 9.14 5 8.1 5 7V2H9ZM12 0H2C1.45 0 1 0.45 1 1C1 1.55 1.45 2 2 2H3V7C3 8.66 1.66 10 0 10V12H5.97V19L6.97 20L7.97 19V12H14V10C12.34 10 11 8.66 11 7V2H12C12.55 2 13 1.55 13 1C13 0.45 12.55 0 12 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PushPin;
