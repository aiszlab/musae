import React from "react";
import { withIcon } from "../../hoc";

const PausePresentation = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.1818) scale(1.0909)">
        <path
          d="M20 0H2C0.9 0 0 0.85 0 1.95V15.95C0 17.05 0.9 18 2 18H20C21.1 18 22 17.05 22 15.95V1.95C22 0.85 21.1 0 20 0ZM20 16H2V2H20V16ZM8 5H10V13H8V5ZM12 5H14V13H12V5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PausePresentation;
