import React from "react";
import { withIcon } from "../../hoc";

const Park = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.26, 0) scale(1.2)">
        <path
          d="M13.9 10H15.9L8.9 0L1.95 10H3.9L0 16H6.92V20H10.87V16H17.9L13.9 10ZM3.69 14L7.59 8H5.78L8.91 3.5L12.06 8H10.16L14.16 14H3.69Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Park;
