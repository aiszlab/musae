import React from "react";
import { withIcon } from "../../hoc";

const PhotoSizeSelectActual = withIcon(({ size }) => {
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
          d="M20 0H2C1 0 0 1 0 2V16C0 17.1 0.9 18 2 18H20C21 18 22 17 22 16V2C22 1 21 0 20 0ZM20 15.92C19.98 15.95 19.94 15.98 19.92 16H2V2.08L2.08 2H19.91C19.94 2.02 19.97 2.06 19.99 2.08V15.92H20ZM10 12.51L7.5 9.5L4 14H18L13.5 8L10 12.51Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PhotoSizeSelectActual;
