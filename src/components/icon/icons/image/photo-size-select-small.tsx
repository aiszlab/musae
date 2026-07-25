import React from "react";
import { withIcon } from "../../hoc";

const PhotoSizeSelectSmall = withIcon(({ size }) => {
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
          d="M22 12H20V14H22V12ZM22 8H20V10H22V8ZM22 16H20V18C21 18 22 17 22 16ZM14 0H12V2H14V0ZM22 4H20V6H22V4ZM20 0V2H22C22 1 21 0 20 0ZM2 18H10V12H0V16C0 17.1 0.9 18 2 18ZM2 4H0V6H2V4ZM14 16H12V18H14V16ZM18 0H16V2H18V0ZM18 16H16V18H18V16ZM2 0C1 0 0 1 0 2H2V0ZM2 8H0V10H2V8ZM10 0H8V2H10V0ZM6 0H4V2H6V0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PhotoSizeSelectSmall;
