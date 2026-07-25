import React from "react";
import { withIcon } from "../../hoc";

const Assistant = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.7143, 0) scale(1.1429)">
        <path
          d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H6L9 21L12 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H11.17L9 18.17L6.83 16H2V2H16V16ZM9 15L10.88 10.88L15 9L10.88 7.12L9 3L7.12 7.12L3 9L7.12 10.88L9 15Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Assistant;
