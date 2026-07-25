import React from "react";
import { withIcon } from "../../hoc";

const RoundaboutLeft = withIcon(({ size }) => {
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
          d="M8.08 5C8.56 2.16 11.02 0 14 0C17.31 0 20 2.69 20 6C20 8.97 17.84 11.44 15 11.92V18H13V11.91C13 10.93 13.71 10.11 14.67 9.94C16.56 9.63 18 7.98 18 6C18 3.79 16.21 2 14 2C12.02 2 10.37 3.44 10.06 5.33C9.89 6.29 9.07 7 8.09 7H3.83L5.42 8.59L4 10L0 6L4 2L5.41 3.41L3.83 5H8.08Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RoundaboutLeft;
