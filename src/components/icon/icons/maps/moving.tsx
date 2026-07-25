import React from "react";
import { withIcon } from "../../hoc";

const Moving = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.8) scale(1.2)">
        <path
          d="M18 3.42V6H20V0H14V2H16.58L12.12 6.46C11.73 6.85 11.1 6.85 10.71 6.46L9.54 5.29C8.37 4.12 6.47 4.12 5.3 5.29L0 10.59L1.41 12L6.7 6.71C7.09 6.32 7.72 6.32 8.11 6.71L9.28 7.88C10.45 9.05 12.35 9.05 13.52 7.88L18 3.42Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Moving;
