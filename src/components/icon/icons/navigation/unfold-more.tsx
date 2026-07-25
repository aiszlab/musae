import React from "react";
import { withIcon } from "../../hoc";

const UnfoldMore = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(5.88, 0) scale(1.3333)">
        <path
          d="M4.59 2.83L7.76 6L9.17 4.59L4.59 0L0 4.59L1.42 6L4.59 2.83ZM4.59 15.17L1.42 12L0.0100002 13.41L4.59 18L9.18 13.41L7.76 12L4.59 15.17Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default UnfoldMore;
