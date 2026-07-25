import React from "react";
import { withIcon } from "../../hoc";

const Forest = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2) scale(1)">
        <path
          d="M24 16L20.14 10H22L15 0L12 4.29L9 0L2 10H3.86L0 16H7V20H11V16H13V20H17V16H24ZM15 3.49L18.16 8H16.48L20.34 14H16.72L14.15 10H16L13.22 6.03L15 3.49ZM3.66 14L7.52 8H5.84L9 3.49L12.16 8H10.48L14.34 14H3.66Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Forest;
