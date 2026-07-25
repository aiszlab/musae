import React from "react";
import { withIcon } from "../../hoc";

const FilterDrama = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4) scale(1)">
        <path
          d="M19.35 6.04C18.67 2.59 15.64 0 12 0C9.11 0 6.61 1.64 5.36 4.04C2.35 4.36 0 6.9 0 10C0 13.31 2.69 16 6 16H19C21.76 16 24 13.76 24 11C24 8.36 21.95 6.22 19.35 6.04ZM19 14H6C3.79 14 2 12.21 2 10C2 7.79 3.79 6 6 6C8.21 6 10 7.79 10 10H12C12 7.24 10.14 4.92 7.6 4.22C8.61 2.88 10.2 2 12 2C15.03 2 17.5 4.47 17.5 7.5V8H19C20.65 8 22 9.35 22 11C22 12.65 20.65 14 19 14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FilterDrama;
