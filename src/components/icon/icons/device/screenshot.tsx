import React from "react";
import { withIcon } from "../../hoc";

const Screenshot = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.3636, 0) scale(1.0909)">
        <path
          d="M12 0.00999999L2 0C0.9 0 0 0.9 0 2V20C0 21.1 0.9 22 2 22H12C13.1 22 14 21.1 14 20V2C14 0.9 13.1 0.00999999 12 0.00999999ZM12 20H2V19H12V20ZM12 17H2V5H12V17ZM12 3H2V2H12V3ZM4.5 7.5H7V6H3V10H4.5V7.5ZM7 16H11V12H9.5V14.5H7V16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Screenshot;
