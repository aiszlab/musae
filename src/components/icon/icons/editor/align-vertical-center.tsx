import React from "react";
import { withIcon } from "../../hoc";

const AlignVerticalCenter = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2857) scale(1.1905)">
        <path
          d="M20.16 8H15.16V3H12.16V8H8.16V0H5.16V8H0V10H5.16V18H8.16V10H12.16V15H15.16V10H20.16V8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AlignVerticalCenter;
