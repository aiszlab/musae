import React from "react";
import { withIcon } from "../../hoc";

const ThreeSixty = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.2) scale(1.2)">
        <path
          d="M10 0C4.48 0 0 2.24 0 5C0 7.24 2.94 9.13 7 9.77V13L11 9L7 5V7.73C3.85 7.17 2 5.83 2 5C2 3.94 5.04 2 10 2C14.96 2 18 3.94 18 5C18 5.73 16.54 6.89 14 7.53V9.58C17.53 8.81 20 7.05 20 5C20 2.24 15.52 0 10 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ThreeSixty;
