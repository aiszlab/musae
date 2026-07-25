import React from "react";
import { withIcon } from "../../hoc";

const South = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3.6, 0) scale(1.2)">
        <path
          d="M14 13L12.59 11.59L8 16.17V0H6V16.17L1.41 11.58L0 13L7 20L14 13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default South;
