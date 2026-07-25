import React from "react";
import { withIcon } from "../../hoc";

const HowToReg = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.5789) scale(1.2632)">
        <path
          d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2ZM2 14C2.2 13.37 4.57 12.32 6.96 12.06L9 10.06C8.61 10.02 8.32 10 8 10C5.33 10 0 11.34 0 14V16H9L7 14H2ZM17.6 8.5L12.47 13.67L10.4 11.59L9 13L12.47 16.5L19 9.91L17.6 8.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default HowToReg;
