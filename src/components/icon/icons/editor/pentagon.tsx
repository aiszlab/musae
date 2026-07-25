import React from "react";
import { withIcon } from "../../hoc";

const Pentagon = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.6) scale(1.2)">
        <path
          d="M17.63 7.78L14.56 17H5.44L2.37 7.78L10 2.44L17.63 7.78ZM0 7L4 19H16L20 7L10 0L0 7Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Pentagon;
