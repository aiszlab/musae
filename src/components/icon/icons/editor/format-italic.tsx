import React from "react";
import { withIcon } from "../../hoc";

const FormatItalic = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.7143, 0) scale(1.7143)">
        <path d="M4 0V3H6.21L2.79 11H0V14H8V11H5.79L9.21 3H12V0H4Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default FormatItalic;
