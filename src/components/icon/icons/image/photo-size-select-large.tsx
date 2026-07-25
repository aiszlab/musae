import React from "react";
import { withIcon } from "../../hoc";

const PhotoSizeSelectLarge = withIcon(({ size }) => {
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
          d="M20 12H22V14H20V12ZM20 8H22V10H20V8ZM22 16H20V18C21 18 22 17 22 16ZM12 0H14V2H12V0ZM20 4H22V6H20V4ZM20 0V2H22C22 1 21 0 20 0ZM0 4H2V6H0V4ZM16 0H18V2H16V0ZM16 16H18V18H16V16ZM2 0C1 0 0 1 0 2H2V0ZM8 0H10V2H8V0ZM4 0H6V2H4V0ZM0 8V16C0 17.1 0.9 18 2 18H14V8H0ZM2 16L4.5 12.79L6.29 14.94L8.79 11.72L12 16H2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PhotoSizeSelectLarge;
