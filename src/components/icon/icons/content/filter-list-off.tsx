import React from "react";
import { withIcon } from "../../hoc";

const FilterListOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2127)">
        <path
          d="M9.44 5.19H19.61V3.19H7.44L9.44 5.19ZM14.44 10.19H16.61V8.19H12.44L14.44 10.19ZM12.61 14.02V15.19H8.61V13.19H11.78L8.78 10.19H4.61V8.19H6.78L3.78 5.19H1.61V3.19H1.78L0 1.41L1.41 0L19.79 18.38L18.38 19.79L12.61 14.02Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FilterListOff;
