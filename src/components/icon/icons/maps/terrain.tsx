import React from "react";
import { withIcon } from "../../hoc";

const Terrain = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 5.4545) scale(1.0909)">
        <path
          d="M13 0L8.78 5.63L10.03 7.3L13 3.33L18 10H9.54L5.53 4.63L0 12H22L13 0ZM4 10L5.52 7.97L7.04 10H4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Terrain;
