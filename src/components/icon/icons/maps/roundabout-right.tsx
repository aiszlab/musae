import React from "react";
import { withIcon } from "../../hoc";

const RoundaboutRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path
          d="M11.92 5C11.44 2.16 8.97 0 6 0C2.69 0 0 2.69 0 6C0 8.97 2.16 11.44 5 11.92V18H7V11.91C7 10.93 6.29 10.11 5.33 9.94C3.44 9.63 2 7.98 2 6C2 3.79 3.79 2 6 2C7.98 2 9.63 3.44 9.94 5.33C10.11 6.29 10.93 7 11.91 7H16.17L14.58 8.59L16 10L20 6L16 2L14.59 3.41L16.17 5H11.92Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RoundaboutRight;
