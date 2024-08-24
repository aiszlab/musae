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
      <path d="M10 5V8H12.21L8.79 16H6V19H14V16H11.79L15.21 8H18V5H10Z" fill="currentColor" />
    </svg>
  );
});

export default FormatItalic;
