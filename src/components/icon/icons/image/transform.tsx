import React from "react";
import { withIcon } from "../../hoc";

const Transform = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.0909, 0) scale(1.0909)">
        <path
          d="M20 17V15H6V3H8L5 0L2 3H4V5H0V7H4V15C4 16.1 4.9 17 6 17H14V19H12L15 22L18 19H16V17H20ZM8 7H14V13H16V7C16 5.9 15.1 5 14 5H8V7Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Transform;
