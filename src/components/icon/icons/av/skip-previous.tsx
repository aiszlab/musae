import React from "react";
import { withIcon } from "../../hoc";

const SkipPrevious = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(2)">
        <path
          d="M0 0H2V12H0V0ZM3.5 6L12 12V0L3.5 6ZM10 8.14L6.97 6L10 3.86V8.14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SkipPrevious;
