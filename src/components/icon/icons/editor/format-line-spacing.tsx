import React from "react";
import { withIcon } from "../../hoc";

const FormatLineSpacing = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.0488) scale(1.1707)">
        <path
          d="M4.5 3.5H7L3.5 0L0 3.5H2.5V13.5H0L3.5 17L7 13.5H4.5V3.5ZM8.5 1.5V3.5H20.5V1.5H8.5ZM8.5 15.5H20.5V13.5H8.5V15.5ZM8.5 9.5H20.5V7.5H8.5V9.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FormatLineSpacing;
