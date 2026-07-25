import React from "react";
import { withIcon } from "../../hoc";

const Functions = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3, 0) scale(1.5)">
        <path d="M12 0H0V2L6.5 8L0 14V16H12V13H5L10 8L5 3H12V0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default Functions;
