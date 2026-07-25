import React from "react";
import { withIcon } from "../../hoc";

const FilterCenterFocus = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM2 2H6V0H2C0.9 0 0 0.9 0 2V6H2V2ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM9 6C7.34 6 6 7.34 6 9C6 10.66 7.34 12 9 12C10.66 12 12 10.66 12 9C12 7.34 10.66 6 9 6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FilterCenterFocus;
