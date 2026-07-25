import React from "react";
import { withIcon } from "../../hoc";

const OutlinedFlag = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.4118, 0) scale(1.4118)">
        <path
          d="M9 2L8 0H0V17H2V10H7L8 12H15V2H9ZM13 10H9L8 8H2V2H7L8 4H13V10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default OutlinedFlag;
