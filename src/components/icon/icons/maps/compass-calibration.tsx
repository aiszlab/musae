import React from "react";
import { withIcon } from "../../hoc";

const CompassCalibration = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.6) scale(1.2)">
        <path
          d="M10 9C7.24 9 5 11.24 5 14C5 16.76 7.24 19 10 19C12.76 19 15 16.76 15 14C15 11.24 12.76 9 10 9ZM10 17C8.35 17 7 15.65 7 14C7 12.35 8.35 11 10 11C11.65 11 13 12.35 13 14C13 15.65 11.65 17 10 17ZM10 0C6.1 0 2.56 1.59 0 4.15L5 9.15C6.28 7.87 8.05 7.07 10 7.07C11.95 7.07 13.72 7.86 15 9.14L20 4.14C17.44 1.59 13.9 0 10 0ZM14.84 6.47C13.4 5.56 11.74 5.07 10 5.07C8.26 5.07 6.59 5.56 5.15 6.48L2.94 4.26C4.99 2.79 7.44 2 10 2C12.56 2 15 2.79 17.05 4.26L14.84 6.47Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CompassCalibration;
