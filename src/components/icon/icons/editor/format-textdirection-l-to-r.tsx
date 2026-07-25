import React from "react";
import { withIcon } from "../../hoc";

const FormatTextdirectionLToR = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.4, 0) scale(1.2)">
        <path
          d="M4 2V6C2.9 6 2 5.1 2 4C2 2.9 2.9 2 4 2ZM12 0H4C1.79 0 0 1.79 0 4C0 6.21 1.79 8 4 8V13H6V2H8V13H10V2H12V0ZM12 12V15H0V17H12V20L16 16L12 12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FormatTextdirectionLToR;
