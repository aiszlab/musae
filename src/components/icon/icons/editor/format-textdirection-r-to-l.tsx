import React from "react";
import { withIcon } from "../../hoc";

const FormatTextdirectionRToL = withIcon(({ size }) => {
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
          d="M6 2V6C4.9 6 4 5.1 4 4C4 2.9 4.9 2 6 2ZM14 0H6C3.79 0 2 1.79 2 4C2 6.21 3.79 8 6 8V13H8V2H10V13H12V2H14V0ZM4 12L0 16L4 20V17H16V15H4V12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FormatTextdirectionRToL;
