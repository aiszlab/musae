import React from "react";
import { withIcon } from "../../hoc";

const Hexagon = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.6154) scale(1.1538)">
        <path
          d="M15.6 0H5.2L0 9L5.2 18H15.6L20.8 9L15.6 0ZM14.45 16H6.35L2.31 9L6.35 2H14.44L18.48 9L14.45 16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Hexagon;
