import React from "react";
import { withIcon } from "../../hoc";

const FormatStrikethrough = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10 19.5H14V16.5H10V19.5ZM5 4.5V7.5H10V10.5H14V7.5H19V4.5H5ZM3 14.5H21V12.5H3V14.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default FormatStrikethrough;
