import React from "react";
import { withIcon } from "../../hoc";

const WbShade = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M12 8V10.5L17.5 16H20L12 8ZM12 16H15L12 13V16ZM6 0L0 6H2V16H10V6H12L6 0ZM7 10H5V6H7V10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default WbShade;
