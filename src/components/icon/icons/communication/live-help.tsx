import React from "react";
import { withIcon } from "../../hoc";

const LiveHelp = withIcon(({ size }) => {
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
          d="M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H6L9 21L12 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H11.17L9 18.17L6.83 16H2V2H16V16ZM8 13H10V15H8V13ZM9 5C10.1 5 11 5.9 11 7C11 9 8 8.75 8 12H10C10 9.75 13 9.5 13 7C13 4.79 11.21 3 9 3C6.79 3 5 4.79 5 7H7C7 5.9 7.9 5 9 5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LiveHelp;
