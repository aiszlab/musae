import React from "react";
import { withIcon } from "../../hoc";

const Signpost = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.2, 0) scale(1.2)">
        <path
          d="M10 8H15L18 5L15 2H10V0H8V2H1V8H8V10H3L0 13L3 16H8V20H10V16H17V10H10V8ZM3 4H14.17L15.17 5L14.17 6H3V4ZM15 14H3.83L2.83 13L3.83 12H15V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Signpost;
