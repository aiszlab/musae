import React from "react";
import { withIcon } from "../../hoc";

const BlindsClosed = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.15) scale(1.2)">
        <path
          d="M18 16V0H2V16H0V18H11.25C11.25 18.97 12.03 19.75 13 19.75C13.97 19.75 14.75 18.97 14.75 18H20V16H18ZM16 8H14V6H16V8ZM12 8H4V6H12V8ZM12 10V12H4V10H12ZM14 10H16V12H14V10ZM16 4H14V2H16V4ZM12 2V4H4V2H12ZM4 16V14H12V16H4ZM14 16V14H16V16H14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BlindsClosed;
