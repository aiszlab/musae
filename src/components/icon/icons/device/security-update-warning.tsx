import React from "react";
import { withIcon } from "../../hoc";

const SecurityUpdateWarning = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.3636, 0) scale(1.0909)">
        <path d="M8 14H6V16H8V14Z" fill="currentColor" />
        <path d="M8 6H6V12H8V6Z" fill="currentColor" />
        <path
          d="M12 0.00999999L2 0C0.9 0 0 0.9 0 2V20C0 21.1 0.9 22 2 22H12C13.1 22 14 21.1 14 20V2C14 0.9 13.1 0.00999999 12 0.00999999ZM12 20H2V19H12V20ZM12 17H2V5H12V17ZM12 3H2V2H12V3Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SecurityUpdateWarning;
