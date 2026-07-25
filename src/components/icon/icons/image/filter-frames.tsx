import React from "react";
import { withIcon } from "../../hoc";

const FilterFrames = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.0909, 0) scale(1.0909)">
        <path
          d="M18 4H14L10 0L6 4H2C0.9 4 0 4.9 0 6V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V6C20 4.9 19.1 4 18 4ZM18 20H2V6H6.52L10.04 2.5L13.52 6H18V20ZM4 18H16V8H4V18ZM6 10H14V16H6V10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FilterFrames;
