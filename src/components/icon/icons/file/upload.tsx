import React from "react";
import { withIcon } from "../../hoc";

const Upload = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.1176, 0) scale(1.4118)">
        <path
          d="M4 13H10V7H14L7 0L0 7H4V13ZM7 2.83L9.17 5H8V11H6V5H4.83L7 2.83ZM0 15H14V17H0V15Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Upload;
